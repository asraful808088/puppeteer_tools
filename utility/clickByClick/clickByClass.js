async function clickByClass(page, className) {
  await page.waitForSelector(className);
  await page.click(className);
}

module.exports = { clickByClass };
