const placeholderImage = "https://dummyimage.com/600x400/000/fff";

export const fixBrokenImage = target => {
  const images = document.querySelectorAll(target);

  images.forEach(image => {
    image.addEventListener("error", e => {
      e.target.src = placeholderImage;
    });
  });
};
