# JNetworks Express.js Backend

Pure Express.js and MongoDB backend for the JNetworks Broadband website using only JavaScript.

## Features

- **Authentication & Authorization**: JWT-based auth with admin roles
- **Broadband Plans Management**: CRUD operations for internet plans
- **OTT Plans Management**: Manage broadband + OTT combo plans
- **App Logos Management**: Upload and manage OTT app logos
- **File Upload**: Multer-based image upload for app logos
- **Security**: Helmet, CORS, rate limiting
- **Database**: MongoDB with Mongoose ODM

## Setup

1. **Install Dependencies**
   ```bash
   cd server
   npm install
   ```

2. **Environment Configuration**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your configuration:
   - `MONGODB_URI`: Your MongoDB connection string
   - `JWT_SECRET`: A strong secret key for JWT tokens
   - `FRONTEND_URL`: Your frontend URL for CORS

3. **Start MongoDB**
   Make sure MongoDB is running on your system.

4. **Seed Database** (Optional)
   ```bash
   npm run seed
   ```
   This creates sample data and an admin user (admin@jnetworks.com / admin123)

5. **Start Server**
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register admin user
- `POST /api/auth/login` - Login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout

### Broadband Plans
- `GET /api/broadband` - Get active plans (public)
- `GET /api/broadband/admin` - Get all plans (admin)
- `GET /api/broadband/:id` - Get single plan
- `POST /api/broadband` - Create plan (admin)
- `PUT /api/broadband/:id` - Update plan (admin)
- `DELETE /api/broadband/:id` - Delete plan (admin)

### OTT Plans
- `GET /api/ott` - Get active plans (public)
- `GET /api/ott/admin` - Get all plans (admin)
- `GET /api/ott/:id` - Get single plan
- `POST /api/ott` - Create plan (admin)
- `PUT /api/ott/:id` - Update plan (admin)
- `DELETE /api/ott/:id` - Delete plan (admin)

### App Logos
- `GET /api/app-logos` - Get active logos (public)
- `GET /api/app-logos/admin` - Get all logos (admin)
- `GET /api/app-logos/:id` - Get single logo
- `POST /api/app-logos` - Create logo with upload (admin)
- `PUT /api/app-logos/:id` - Update logo (admin)
- `DELETE /api/app-logos/:id` - Delete logo (admin)

## Database Models

### User
- email, password, role (admin/user), isActive

### BroadbandPlan
- name, speed, description, pricing (monthly/quarterly/halfYearly/yearly), features

### OTTPlan
- name, variants (speed + pricing), premiumApps, nonPremiumApps

### AppLogo
- name, logoPath, category (premium/non-premium), sortOrder

## Security Features

- JWT authentication
- Password hashing with bcrypt
- Helmet for security headers
- CORS configuration
- Rate limiting
- File upload validation
- Admin-only routes protection

## File Upload

App logos are uploaded to `/public/assets/images/ott-partners/` with automatic filename generation and validation for image types only.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT with bcryptjs
- **File Upload**: Multer
- **Security**: Helmet, CORS, express-rate-limit
- **Language**: JavaScript (ES6+)