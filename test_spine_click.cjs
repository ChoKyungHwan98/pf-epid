const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    await page.goto('http://localhost:3000/pf-epid/');
    await new Promise(r => setTimeout(r, 5000)); // wait for spine to load

    const shield = await page.$('#xxionx-spine-container');
    const parent = await shield.evaluateHandle(el => el.parentElement);

    console.log('Clicking 1st time');
    await parent.click();
    await new Promise(r => setTimeout(r, 1000));
    
    console.log('Clicking 2nd time');
    await parent.click();
    await new Promise(r => setTimeout(r, 1000));
    
    await browser.close();
  } catch(e) {
    console.log(e.message);
  }
})();
