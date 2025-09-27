const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const User = require('../models/User');
const BroadbandPlan = require('../models/BroadbandPlan');
const OTTPlan = require('../models/OTTPlan');
const AppLogo = require('../models/AppLogo');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jnetworks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    console.log('Starting database seeding...');

    // Clear existing data
    await User.deleteMany({});
    await BroadbandPlan.deleteMany({});
    await OTTPlan.deleteMany({});
    await AppLogo.deleteMany({});

    // Create admin user
    const adminUser = new User({
      email: 'admin@jnetworks.com',
      password: 'admin123',
      role: 'admin'
    });
    await adminUser.save();
    console.log('Admin user created');

    // Create sample broadband plans
    const broadbandPlans = [
      {
        name: 'Starter',
        speed: 50,
        description: 'Perfect for basic internet usage',
        monthly: 599,
        quarterly: 1650,
        halfYearly: 3000,
        yearly: 5500,
        features: ['50 Mbps Speed', 'Unlimited Data', '24/7 Support'],
        sortOrder: 1
      },
      {
        name: 'Standard',
        speed: 100,
        description: 'Great for streaming and gaming',
        monthly: 799,
        quarterly: 2200,
        halfYearly: 4000,
        yearly: 7500,
        features: ['100 Mbps Speed', 'Unlimited Data', '24/7 Support', 'Priority Support'],
        sortOrder: 2
      },
      {
        name: 'Premium',
        speed: 200,
        description: 'Ultimate speed for power users',
        monthly: 999,
        quarterly: 2750,
        halfYearly: 5000,
        yearly: 9500,
        features: ['200 Mbps Speed', 'Unlimited Data', '24/7 Support', 'Priority Support', 'Free Installation'],
        sortOrder: 3
      }
    ];

    await BroadbandPlan.insertMany(broadbandPlans);
    console.log('Broadband plans created');

    // Create sample app logos
    const appLogos = [
      { name: 'Disney+ Hotstar', logoPath: '/assets/images/ott-partners/disney-hotstar.png', category: 'premium', sortOrder: 1 },
      { name: 'SonyLIV', logoPath: '/assets/images/ott-partners/sony-liv.png', category: 'premium', sortOrder: 2 },
      { name: 'Zee5', logoPath: '/assets/images/ott-partners/zee5.png', category: 'premium', sortOrder: 3 },
      { name: 'Prime Lite', logoPath: '/assets/images/ott-partners/amazon-prime-lite.png', category: 'premium', sortOrder: 4 },
      { name: 'ETV Win', logoPath: '/assets/images/ott-partners/etv-win.png', category: 'non-premium', sortOrder: 1 },
      { name: 'Discovery Plus', logoPath: '/assets/images/ott-partners/discovery.png', category: 'non-premium', sortOrder: 2 },
      { name: 'Hungama', logoPath: '/assets/images/ott-partners/hungama.png', category: 'non-premium', sortOrder: 3 },
      { name: 'Shemaroo', logoPath: '/assets/images/ott-partners/shemaroo.png', category: 'non-premium', sortOrder: 4 }
    ];

    await AppLogo.insertMany(appLogos);
    console.log('App logos created');

    // Create sample OTT plans
    const ottPlans = [
      {
        name: 'PB Basic',
        variants: [
          {
            speed: '40',
            prices: [
              { duration: '1M', price: 620 },
              { duration: '3M', price: 1850 },
              { duration: '6M', price: 3400 },
              { duration: '1Y', price: 6200 }
            ]
          },
          {
            speed: '100',
            prices: [
              { duration: '1M', price: 1020 },
              { duration: '3M', price: 3000 },
              { duration: '6M', price: 5600 },
              { duration: '1Y', price: 10200 }
            ]
          }
        ],
        premiumApps: [
          { name: 'SonyLIV', logoPath: '/assets/images/ott-partners/sony-liv.png' },
          { name: 'Zee5', logoPath: '/assets/images/ott-partners/zee5.png' }
        ],
        nonPremiumApps: [
          { name: 'ETV Win', logoPath: '/assets/images/ott-partners/etv-win.png' },
          { name: 'Discovery Plus', logoPath: '/assets/images/ott-partners/discovery.png' },
          { name: 'Hungama', logoPath: '/assets/images/ott-partners/hungama.png' }
        ],
        sortOrder: 1
      },
      {
        name: 'PB Premium',
        variants: [
          {
            speed: '40',
            prices: [
              { duration: '1M', price: 725 },
              { duration: '3M', price: 2100 },
              { duration: '6M', price: 4100 },
              { duration: '1Y', price: 7250 }
            ]
          },
          {
            speed: '100',
            prices: [
              { duration: '1M', price: 1125 },
              { duration: '3M', price: 3300 },
              { duration: '6M', price: 6200 },
              { duration: '1Y', price: 11250 }
            ]
          }
        ],
        premiumApps: [
          { name: 'Disney+ Hotstar', logoPath: '/assets/images/ott-partners/disney-hotstar.png' },
          { name: 'SonyLIV', logoPath: '/assets/images/ott-partners/sony-liv.png' },
          { name: 'Zee5', logoPath: '/assets/images/ott-partners/zee5.png' },
          { name: 'Prime Lite', logoPath: '/assets/images/ott-partners/amazon-prime-lite.png' }
        ],
        nonPremiumApps: [
          { name: 'ETV Win', logoPath: '/assets/images/ott-partners/etv-win.png' },
          { name: 'Discovery Plus', logoPath: '/assets/images/ott-partners/discovery.png' },
          { name: 'Hungama', logoPath: '/assets/images/ott-partners/hungama.png' },
          { name: 'Shemaroo', logoPath: '/assets/images/ott-partners/shemaroo.png' }
        ],
        sortOrder: 2
      }
    ];

    await OTTPlan.insertMany(ottPlans);
    console.log('OTT plans created');

    console.log('Database seeding completed successfully!');
    console.log('Admin credentials: admin@jnetworks.com / admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();