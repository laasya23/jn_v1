const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const AppLogo = require('../models/AppLogo');
const { adminAuth } = require('../middleware/auth');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../../public/assets/images/ott-partners');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    // Generate unique filename
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    const name = file.originalname.replace(ext, '').toLowerCase().replace(/[^a-z0-9]/g, '-');
    cb(null, `${name}-${uniqueSuffix}${ext}`);
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|svg|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Get all app logos (public)
router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    const filter = { isActive: true };
    
    if (category) {
      filter.category = category;
    }
    
    const logos = await AppLogo.find(filter)
      .sort({ sortOrder: 1, name: 1 });
    
    res.json(logos);
  } catch (error) {
    console.error('Get app logos error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all app logos including inactive (admin only)
router.get('/admin', adminAuth, async (req, res) => {
  try {
    const logos = await AppLogo.find()
      .sort({ sortOrder: 1, name: 1 });
    
    res.json(logos);
  } catch (error) {
    console.error('Get all app logos error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single app logo
router.get('/:id', async (req, res) => {
  try {
    const logo = await AppLogo.findById(req.params.id);
    
    if (!logo) {
      return res.status(404).json({ message: 'App logo not found' });
    }
    
    res.json(logo);
  } catch (error) {
    console.error('Get app logo error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create app logo (admin only)
router.post('/', adminAuth, upload.single('logo'), async (req, res) => {
  try {
    const { name, category = 'non-premium', sortOrder = 0 } = req.body;
    
    if (!req.file) {
      return res.status(400).json({ message: 'Logo file is required' });
    }
    
    const logoPath = `/assets/images/ott-partners/${req.file.filename}`;
    
    const logo = new AppLogo({
      name,
      logoPath,
      category,
      sortOrder: parseInt(sortOrder)
    });
    
    await logo.save();
    
    res.status(201).json(logo);
  } catch (error) {
    console.error('Create app logo error:', error);
    
    // Clean up uploaded file if database save failed
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

// Update app logo (admin only)
router.put('/:id', adminAuth, upload.single('logo'), async (req, res) => {
  try {
    const logo = await AppLogo.findById(req.params.id);
    
    if (!logo) {
      return res.status(404).json({ message: 'App logo not found' });
    }
    
    const updateData = { ...req.body };
    
    // If new logo file uploaded, update path and delete old file
    if (req.file) {
      const newLogoPath = `/assets/images/ott-partners/${req.file.filename}`;
      
      // Delete old file
      const oldFilePath = path.join(__dirname, '../../public', logo.logoPath);
      if (fs.existsSync(oldFilePath)) {
        fs.unlink(oldFilePath, (err) => {
          if (err) console.error('Error deleting old file:', err);
        });
      }
      
      updateData.logoPath = newLogoPath;
    }
    
    const updatedLogo = await AppLogo.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    res.json(updatedLogo);
  } catch (error) {
    console.error('Update app logo error:', error);
    
    // Clean up uploaded file if update failed
    if (req.file) {
      fs.unlink(req.file.path, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete app logo (admin only)
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const logo = await AppLogo.findById(req.params.id);
    
    if (!logo) {
      return res.status(404).json({ message: 'App logo not found' });
    }
    
    // Delete file from filesystem
    const filePath = path.join(__dirname, '../../public', logo.logoPath);
    if (fs.existsSync(filePath)) {
      fs.unlink(filePath, (err) => {
        if (err) console.error('Error deleting file:', err);
      });
    }
    
    await AppLogo.findByIdAndDelete(req.params.id);
    
    res.json({ message: 'App logo deleted successfully' });
  } catch (error) {
    console.error('Delete app logo error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Bulk update sort order (admin only)
router.put('/bulk/sort-order', adminAuth, async (req, res) => {
  try {
    const { logos } = req.body; // Array of { id, sortOrder }
    
    const updatePromises = logos.map(({ id, sortOrder }) =>
      AppLogo.findByIdAndUpdate(id, { sortOrder })
    );
    
    await Promise.all(updatePromises);
    
    res.json({ message: 'Sort order updated successfully' });
  } catch (error) {
    console.error('Bulk update sort order error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;