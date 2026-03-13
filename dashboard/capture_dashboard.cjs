const puppeteer = require('puppeteer');

(async () => {
  console.log("Starting Capture...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  console.log("Navigating to http://localhost:5173...");
  let success = false;
  for(let i=0; i<5; i++) {
     try {
         await page.goto('http://localhost:5173', { waitUntil: 'networkidle0', timeout: 30000 });
         success = true;
         break;
     } catch (e) {
         console.log("Waiting for server... Attempt " + (i+1));
         await new Promise(r => setTimeout(r, 5000));
     }
  }
  if (!success) {
      console.log("Failed to connect to Vite server.");
      await browser.close();
      process.exit(1);
  }
  await new Promise(r => setTimeout(r, 6000));
  await page.screenshot({ path: '../dashboard_screenshot.png' });
  await browser.close();
  console.log('Saved dashboard_screenshot.png');
})();
