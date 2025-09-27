const express = require('express');
const BroadbandPlan = require('../models/BroadbandPlan');
const { adminAuth, auth } = require('../middleware/auth');

const router = express.Router();

// Get all broadband plans (public)
router.get('/', async (req, res) => {
  try {
    const plans = await BroadbandPlan.find({ isActive: true })
      .sort({ sortOrder: 1, createdAt: 1 });
    
    res.json(plans);
  } catch (error) {
    console.error('Get broadband plans error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all broadband plans including inactive (admin only)
router.get('/admin', adminAuth, async (req, res) => {
  try {
    const plans = await BroadbandPlan.find()
      .sort({ sortOrder: 1, createdAt: 1 });
    
    res.json(plans);
  } catch (error) {
    console.error('Get all broadband plans error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single broadband plan
router.get('/:id', async (req, res) => {
  try {
    const plan = await BroadbandPlan.findById(req.params.id);
    
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    
    res.json(plan);
  } catch (error) {
    console.error('Get broadband plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create broadband plan (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const plan = new BroadbandPlan(req.body);
    await plan.save();
    
    res.status(201).json(plan);
  } catch (error) {
    console.error('Create broadband plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update broadband plan (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const plan = await BroadbandPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    
    res.json(plan);
  } catch (error) {
    console.error('Update broadband plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete broadband plan (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const plan = await BroadbandPlan.findByIdAndDelete(req.params.id);
    
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    
    res.json({ message: 'Plan deleted successfully' });
  } catch (error) {
    console.error('Delete broadband plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Bulk update sort order (admin only)
router.put('/bulk/sort-order', adminAuth, async (req, res) => {
  try {
    const { plans } = req.body; // Array of { id, sortOrder }
    
    const updatePromises = plans.map(({ id, sortOrder }) =>
      BroadbandPlan.findByIdAndUpdate(id, { sortOrder })
    );
    
    await Promise.all(updatePromises);
    
    res.json({ message: 'Sort order updated successfully' });
  } catch (error) {
    console.error('Bulk update sort order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;