const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ 
    viewport: { width: 1440, height: 900 } 
  });
  
  try {
    console.log('Navigating to http://localhost:2002...');
    await page.goto('http://localhost:2002', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('Taking ultra-modern screenshot...');
    await page.screenshot({ 
      path: 'test-results/homepage-ultra-modern.png', 
      fullPage: true
    });
    
    console.log('Screenshot saved to test-results/homepage-ultra-modern.png');
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await browser.close();
  }
})();
