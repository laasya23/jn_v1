"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Plus, Edit, Trash2, Loader2 } from 'lucide-react';

export function BroadbandPlansManager() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPlan, setEditingPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    speed: '',
    description: '',
    monthly: '',
    quarterly: '',
    halfYearly: '',
    yearly: '',
    features: []
  });

  useEffect(() => {
    fetchPlans();
  }, []);

  const fetchPlans = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch('/api/broadband/admin', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setPlans(data);
      }
    } catch (error) {
      console.error('Error fetching plans:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('authToken');
      const url = editingPlan 
        ? `/api/broadband/${editingPlan._id}`
        : '/api/broadband';
      
      const method = editingPlan ? 'PUT' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          speed: parseInt(formData.speed),
          monthly: parseFloat(formData.monthly) || 0,
          quarterly: parseFloat(formData.quarterly) || 0,
          halfYearly: parseFloat(formData.halfYearly) || 0,
          yearly: parseFloat(formData.yearly) || 0,
          features: formData.features.filter(f => f.trim())
        })
      });

      if (response.ok) {
        await fetchPlans();
        resetForm();
      }
    } catch (error) {
      console.error('Error saving plan:', error);
    }
  };

  const handleEdit = (plan) => {
    setEditingPlan(plan);
    setFormData({
      name: plan.name,
      speed: plan.speed.toString(),
      description: plan.description || '',
      monthly: plan.monthly.toString(),
      quarterly: plan.quarterly.toString(),
      halfYearly: plan.halfYearly.toString(),
      yearly: plan.yearly.toString(),
      features: plan.features || []
    });
  };

  const handleDelete = async (planId) => {
    if (!confirm('Are you sure you want to delete this plan?')) return;
    
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/broadband/${planId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        await fetchPlans();
      }
    } catch (error) {
      console.error('Error deleting plan:', error);
    }
  };

  const resetForm = () => {
    setEditingPlan(null);
    setFormData({
      name: '',
      speed: '',
      description: '',
      monthly: '',
      quarterly: '',
      halfYearly: '',
      yearly: '',
      features: []
    });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>
            {editingPlan ? 'Edit Plan' : 'Add New Plan'}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="Plan Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <Input
                placeholder="Speed (Mbps)"
                type="number"
                value={formData.speed}
                onChange={(e) => setFormData({...formData, speed: e.target.value})}
                required
              />
            </div>
            
            <Input
              placeholder="Description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
            
            <div className="grid grid-cols-4 gap-4">
              <Input
                placeholder="Monthly Price"
                type="number"
                step="0.01"
                value={formData.monthly}
                onChange={(e) => setFormData({...formData, monthly: e.target.value})}
              />
              <Input
                placeholder="Quarterly Price"
                type="number"
                step="0.01"
                value={formData.quarterly}
                onChange={(e) => setFormData({...formData, quarterly: e.target.value})}
              />
              <Input
                placeholder="Half Yearly Price"
                type="number"
                step="0.01"
                value={formData.halfYearly}
                onChange={(e) => setFormData({...formData, halfYearly: e.target.value})}
              />
              <Input
                placeholder="Yearly Price"
                type="number"
                step="0.01"
                value={formData.yearly}
                onChange={(e) => setFormData({...formData, yearly: e.target.value})}
              />
            </div>

            <div className="flex gap-2">
              <Button type="submit">
                {editingPlan ? 'Update Plan' : 'Add Plan'}
              </Button>
              {editingPlan && (
                <Button type="button" variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Existing Plans</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Speed</TableHead>
                <TableHead>Monthly</TableHead>
                <TableHead>Yearly</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan._id}>
                  <TableCell>{plan.name}</TableCell>
                  <TableCell>{plan.speed} Mbps</TableCell>
                  <TableCell>₹{plan.monthly}</TableCell>
                  <TableCell>₹{plan.yearly}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleEdit(plan)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleDelete(plan._id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}