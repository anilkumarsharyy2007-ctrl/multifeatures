@echo off
title MULTIFEATURES - Google Firebase Deployment
cd /d "%~dp0"
cls
echo ======================================================================
echo           MULTIFEATURES - GOOGLE FIREBASE HOSTING DEPLOYMENT
echo ======================================================================
echo.
echo Step 1: Authenticating with your Google Account...
echo (A browser window will open automatically. Click Allow to authorize)
echo.
call firebase login
echo.
echo ======================================================================
echo Step 2: Deploying to Google Firebase Hosting CDN...
echo ======================================================================
echo.
call firebase deploy --only hosting
echo.
echo ======================================================================
echo [SUCCESS] Your website is now live!
echo Primary Live URL:   https://multifeatures.web.app
echo Secondary Live URL: https://multifeatures.firebaseapp.com
echo ======================================================================
echo.
pause

