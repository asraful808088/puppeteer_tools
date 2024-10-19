async function textInputbyID(page, id,text) {
    await page.waitForSelector(id);
    await page.click(id);
    await page.type(id, text);
  }
  
  module.exports = { textInputbyID };
  