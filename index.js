const puppeteer = require("puppeteer");
const { loadLocalStorageData } = require("./cookie/load_cookie");
// const { save_cookie } = require("./cookie/save_cookie");
const { setTimeout: wait } = require("timers/promises");
const {listClickByClass}  = require('./utility/listClick/listClickByClass')
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://web.telegram.org/a/", { waitUntil: "networkidle2" });
  await loadLocalStorageData(page)
  await page.reload({ waitUntil: "networkidle2" });
  await wait(10000)
  await page.goto("https://web.telegram.org/k/#@wsotp_bot", { waitUntil: "networkidle2" });

  

})();