import { createCard } from "../ui/card";
import { fixBrokenImage } from "../utility/fixBrokenImage";
import { target } from "../ui/targets";

export const createNews = instanceNew => {
  instanceNew
    .latestNews()
    .then(data => {
      const markup = createCard(data);
      target.innerHTML = markup;
      fixBrokenImage(".carousel-item__img");
    })
    .catch(error => {
      console.log(error);
    });
};
