const listClick = async (page, className, index = 0, waitForload = false) => {
  await page.waitForSelector(".menu_link");
  const links = await page.$$(".menu_link");
  if (links.length > index) {
    if (waitForload) {
      await Promise.all([
        await links[index].click(),
        page.waitForNavigation({ waitUntil: "load" }),
        page.waitForNavigation({ waitUntil: 'domcontentloaded' })
      ]);
    } else {
      await links[index].click();
    }
  }
};
module.exports = { listClick };
