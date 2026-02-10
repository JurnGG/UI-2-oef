export function createElementWithText(tag, textContent) {
  const element = document.createElement(tag);
  element.textContent = textContent;
  return element;
}
