async function getAttriById(page, id) {
  const attributes = await page.evaluate((id) => {
    const element = document.getElementById(id);
    if (!element) return null;
    const attrs = {};
    for (let attr of element.attributes) {
      attrs[attr.name] = attr.value;
    }
    return attrs;
  },id);

  return attributes;
}

module.exports = { getAttriById };
