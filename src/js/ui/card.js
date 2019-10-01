import { trinword } from "../utility/trimwords";

export const createCard = data => {
  let cards = "";
  data.articles.forEach(d => {
    cards += `
    <article class="carousel-item shadow">
    <a href=${d.url} target="_blank">
    <img
    class="carousel-item__img"
    src="${d.urlToImage}"
    alt="People"
    />
    <div class="carousel-item__details">
    <div>
    </div>
    <p class="carousel-item__details--title">${trinword(d.title, 9)}...</p>
    <p class="carousel-item__details--subtitle">${d.source.name}</p>
    </div>
    </a>
    </article>`;
  });
  return cards;
};
