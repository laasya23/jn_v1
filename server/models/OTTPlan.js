const mongoose = require('mongoose');

const ottAppSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  logoPath: {
    type: String,
    required: true
  }
});

const priceVariantSchema = new mongoose.Schema({
  duration: {
    type: String,
    enum: ['1M', '3M', '6M', '1Y'],
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

const speedVariantSchema = new mongoose.Schema({
  speed: {
    type: String,
    enum: ['40', '100'],
    required: true
  },
  prices: [priceVariantSchema]
});

const ottPlanSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  variants: [speedVariantSchema],
  premiumApps: [ottAppSchema],
  nonPremiumApps: [ottAppSchema],
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
ottPlanSchema.index({ isActive: 1, sortOrder: 1 });

module.exports = mongoose.model('OTTPlan', ottPlanSchema);