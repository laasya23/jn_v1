const mongoose = require('mongoose');

const appLogoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  logoPath: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['premium', 'non-premium'],
    default: 'non-premium'
  },
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
appLogoSchema.index({ isActive: 1, category: 1, sortOrder: 1 });

module.exports = mongoose.model('AppLogo', appLogoSchema);