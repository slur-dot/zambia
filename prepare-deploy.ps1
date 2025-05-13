# Create deployment directory
New-Item -ItemType Directory -Force -Path "deploy"

# Copy necessary files and directories
Copy-Item -Path "app" -Destination "deploy" -Recurse
Copy-Item -Path "components" -Destination "deploy" -Recurse
Copy-Item -Path "hooks" -Destination "deploy" -Recurse
Copy-Item -Path "lib" -Destination "deploy" -Recurse
Copy-Item -Path "prisma" -Destination "deploy" -Recurse
Copy-Item -Path "public" -Destination "deploy" -Recurse
Copy-Item -Path "styles" -Destination "deploy" -Recurse
Copy-Item -Path ".env" -Destination "deploy"
Copy-Item -Path "next.config.mjs" -Destination "deploy"
Copy-Item -Path "package.json" -Destination "deploy"
Copy-Item -Path "postcss.config.mjs" -Destination "deploy"
Copy-Item -Path "tailwind.config.ts" -Destination "deploy"
Copy-Item -Path "tsconfig.json" -Destination "deploy"

# Create deployment script
@"
#!/bin/bash
npm install
npx prisma generate
npm run build
npm install -g pm2
pm2 start npm --name "zambia-constitution" -- start
pm2 save
"@ | Out-File -FilePath "deploy/deploy.sh" -Encoding UTF8

# Create ZIP file
Compress-Archive -Path "deploy\*" -DestinationPath "zambia-constitution-deploy.zip" -Force

# Clean up
Remove-Item -Path "deploy" -Recurse -Force

Write-Host "Deployment package created: zambia-constitution-deploy.zip" 