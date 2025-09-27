const express = require('express');
const OTTPlan = require('../models/OTTPlan');
const { adminAuth, auth } = require('../middleware/auth');

const router = express.Router();

// Get all OTT plans (public)
router.get('/', async (req, res) => {
  try {
    const plans = await OTTPlan.find({ isActive: true })
      .sort({ sortOrder: 1, createdAt: 1 });
    
    res.json(plans);
  } catch (error) {
    console.error('Get OTT plans error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all OTT plans including inactive (admin only)
router.get('/admin', adminAuth, async (req, res) => {
  try {
    const plans = await OTTPlan.find()
      .sort({ sortOrder: 1, createdAt: 1 });
    
    res.json(plans);
  } catch (error) {
    console.error('Get all OTT plans error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single OTT plan
router.get('/:id', async (req, res) => {
  try {
    const plan = await OTTPlan.findById(req.params.id);
    
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    
    res.json(plan);
  } catch (error) {
    console.error('Get OTT plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create OTT plan (admin only)
router.post('/', adminAuth, async (req, res) => {
  try {
    const plan = new OTTPlan(req.body);
    await plan.save();
    
    res.status(201).json(plan);
  } catch (error) {
    console.error('Create OTT plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update OTT plan (admin only)
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const plan = await OTTPlan.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    
    res.json(plan);
  } catch (error) {
    console.error('Update OTT plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete OTT plan (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const plan = await OTTPlan.findByIdAndDelete(req.params.id);
    
    if (!plan) {
      return res.status(404).json({ message: 'Plan not found' });
    }
    
    res.json({ message: 'Plan deleted successfully' });
  } catch (error) {
    console.error('Delete OTT plan error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Bulk update sort order (admin only)
router.put('/bulk/sort-order', adminAuth, async (req, res) => {
  try {
    const { plans } = req.body; // Array of { id, sortOrder }
    
    const updatePromises = plans.map(({ id, sortOrder }) =>
      OTTPlan.findByIdAndUpdate(id, { sortOrder })
    );
    
    await Promise.all(updatePromises);
    
    res.json({ message: 'Sort order updated successfully' });
  } catch (error) {
    console.error('Bulk update sort order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;