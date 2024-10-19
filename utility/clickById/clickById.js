async function clickById(page, id) {
    await page.waitForSelector(id);
    await page.click(id);
  }
  
  module.exports = { clickById };
  