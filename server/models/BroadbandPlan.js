const mongoose = require('mongoose');

const broadbandPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  speed: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  monthly: {
    type: Number,
    default: 0
  },
  quarterly: {
    type: Number,
    default: 0
  },
  halfYearly: {
    type: Number,
    default: 0
  },
  yearly: {
    type: Number,
    default: 0
  },
  features: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  sortOrder: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for better query performance
broadbandPlanSchema.index({ isActive: 1, sortOrder: 1 });

module.exports = mongoose.model('BroadbandPlan', broadbandPlanSchema);