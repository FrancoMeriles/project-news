import imgNotFound from "../../assets/img/not-found.png";

export const fixBrokenImage = target => {
  const images = document.querySelectorAll(target);

  images.forEach(image => {
    image.addEventListener("error", e => {
      e.target.src = imgNotFound;
    });
  });
};
