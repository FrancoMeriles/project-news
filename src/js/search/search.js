import News from "../news/news";
import { createCard } from "../ui/card";
import { fixBrokenImage } from "../utility/fixBrokenImage";
import { spinnerNotFound, spinner } from "../ui/spinners";

const formSearchSelect = document.querySelector(".searchSelect");
const formSearchQuery = document.querySelector(".searchQuery");
const target = document.querySelector("#carousel-news");

formSearchSelect.addEventListener("submit", e => {
  e.preventDefault();
  target.innerHTML = spinner;
  const country = document.querySelector("#country").value;
  const category = document.querySelector("#category").value;
  const searchNews = new News({
    country,
    category
  });

  searchNews
    .searchNews()
    .then(data => {
      const markup = createCard(data);
      target.innerHTML = markup;
      fixBrokenImage(".carousel-item__img");
      target.scrollIntoView({
        behavior: "smooth"
      });
    })
    .catch(error => {
      console.log(error);
    });
});

formSearchQuery.addEventListener("submit", e => {
  e.preventDefault();
  target.innerHTML = spinner;
  const sources = document.querySelector("#sources").value;
  const q = document.querySelector("#query").value;
  const querySearch = new News({
    target: "everything",
    sources,
    q
  });

  querySearch
    .queryNews()
    .then(data => {
      if (data.articles.length === 0) {
        target.parentNode.classList.remove("hide");
        target.innerHTML = spinnerNotFound;
      } else {
        const markup = createCard(data);
        target.parentNode.classList.remove("hide");
        target.innerHTML = markup;
        fixBrokenImage(".carousel-item__img");
      }
      target.scrollIntoView({
        behavior: "smooth"
      });
    })
    .catch(error => {
      console.log(error);
    });
});
