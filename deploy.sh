#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment process..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Generate Prisma client
echo "🔧 Generating Prisma client..."
npx prisma generate

# Build the application
echo "🏗️ Building the application..."
npm run build

# Create a deployment package
echo "Creating deployment package..."
tar -czf deploy.tar.gz .next package.json package-lock.json public

# Copy to VPS (replace with your VPS details)
echo "Copying files to VPS..."
scp deploy.tar.gz root@your-vps-ip:/var/www/zambia-constitution/

# SSH into VPS and deploy
echo "Deploying on VPS..."
ssh root@your-vps-ip << 'ENDSSH'
cd /var/www/zambia-constitution
tar -xzf deploy.tar.gz
rm deploy.tar.gz
npm install --production
pm2 restart zambia-constitution
ENDSSH

echo "✅ Deployment completed successfully!" 