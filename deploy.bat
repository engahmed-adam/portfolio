@echo off
echo ========================================================
echo       Deploy Ahmed Adam Portfolio to GitHub
echo ========================================================
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/username/portfolio.git): "

if "%REPO_URL%"=="" (
    echo Error: No repository URL provided.
    pause
    exit /b
)

echo.
echo Adding remote origin...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo SUCCESS! Your code has been pushed to GitHub.
    echo.
    echo Next step to enable GitHub Pages:
    echo 1. Go to your repository on GitHub.
    echo 2. Click Settings -^> Pages.
    echo 3. Under "Branch", select "main" and folder "/ (root)".
    echo 4. Click Save.
    echo Your portfolio will be live in 1-2 minutes!
    echo ========================================================
) else (
    echo.
    echo Something went wrong while pushing. Please verify your GitHub login or URL.
)
echo.
pause
