async function listClickByClass(page,classname,chatIndex) {
  await page.evaluate((index,classname) => {
    const chatItems = document.querySelectorAll(
      classname
    );
    if (chatItems && chatItems[index]) {
      chatItems[index].click();
    }
  }, chatIndex,classname);
}

module.exports = { listClickByClass };
