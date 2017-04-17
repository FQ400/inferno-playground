function simulateKey(el, key, keyEvent) {
  const event = new KeyboardEvent(keyEvent, { key, bubbles: true });
  el.dispatchEvent(event);
}

function convertToElement(node) {
  return node.dom ? node.dom : node;
}

global.TestSupport = {
  clearDOM: () => {
    document.body.innerHTML = null;
  },

  reRender: () => {
    jest.runAllTicks();
    jest.runAllTimers();
  },

  fire: {
    click: (node) => {
      const el = convertToElement(node);
      el.click();
    },
    doubleClick: (node) => {
      TestSupport.fire.click(node);
      TestSupport.fire.click(node);
    },
    keypress: (node, key) => simulateKey(convertToElement(node), key, 'keypress'),
    keydown: (node, key) => simulateKey(convertToElement(node), key, 'keydown'),
    keyup: (node, key) => simulateKey(convertToElement(node), key, 'keyup'),
    change: (node) => {
      const event = new Event('change');
      convertToElement(node).dispatchEvent(event);
    },
    focus: (node) => convertToElement(node).focus(),
    blur: (node) => convertToElement(node).blur()
  }
};
