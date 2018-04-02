const puppeteer = require('puppeteer');

async function fillForm() {

const browser = await puppeteer.launch({headless: false});
const page = await browser.newPage();
await page.goto('https://www.int.simplycreditinc.com/staging/manage/#signup');


await page.click('#invite_code');
await page.keyboard.type('simplylowrates');

await page.click('#email');
await page.keyboard.type('aditimahajan111@gmail.com');

await page.click('#confirm-email');
await page.keyboard.type('aditimahajan111@gmail.com');

await page.click('#password');
await page.keyboard.type('testpassword');

await page.click('#confirm-password');
await page.keyboard.type('testpassword');

await page.click('#first-name');
await page.keyboard.type('XYZ');

await page.click('#last-name');
await page.keyboard.type('XYZ');

await page.click('#phone');
await page.keyboard.type('2025550191');

await page.click('#street');
await page.keyboard.type('12, XYZ street');

await page.click('#city');
await page.keyboard.type('XYZ');

await page.select('#state', 'AL');

await page.click('#zip');
await page.keyboard.type('123456789');

await page.click('#ssn');
await page.keyboard.type('123456789');


await page.click('#dob-month');
await page.keyboard.type('Feb');

await page.select('#dob-day', '1');

await page.select('#dob-year', '1980');

await page.click('#income');
await page.keyboard.type('123456789');

await page.click('#mortgage');
await page.keyboard.type('123');


await page.click('#terms');

await page.click('#signup-submit');


}

fillForm();