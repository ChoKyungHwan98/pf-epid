const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.toString()));
    
    // In order to access the React playerRef, we can't easily do it.
    // But we can just click the element and see the logs.
    await page.goto('http://localhost:3000/pf-epid/', {waitUntil: 'networkidle2'});
    
    const shield = await page.$('.cursor-pointer');
    if (shield) {
      console.log('Found cursor-pointer wrapper, clicking it');
      await shield.click();
    } else {
      console.log('Wrapper not found');
    }
    
    await new Promise(r => setTimeout(r, 1000));
    await browser.close();
  } catch(e) {
    console.log("Script error:", e.message);
  }
})();
