@echo off
echo ========================================
echo   RONNIE WEBSITE - VERCEL DEPLOYMENT
echo ========================================
echo.

echo [1/4] Installing Vercel CLI...
npm install -g vercel

echo.
echo [2/4] Building project...
cd apps\web
call pnpm build

echo.
echo [3/4] Testing production build...
echo Build successful! Ready for deployment.
echo.

echo [4/4] Instructions:
echo.
echo To deploy to Vercel:
echo 1. Run: vercel
echo 2. Follow the prompts
echo 3. Choose: ronnie-website as project name
echo 4. Root directory: apps/web
echo.
echo For production deploy:
echo Run: vercel --prod
echo.

pause

