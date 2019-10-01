export const setText = (text, target) => {
  const titleNode = document.querySelector(target);
  titleNode.innerHTML = text;
};
