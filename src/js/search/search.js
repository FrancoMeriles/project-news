import News from "../news/news";
import { createCard } from "../ui/card";
import { fixBrokenImage } from "../utility/fixBrokenImage";
import { spinnerNotFound } from "../ui/spinners";

const formSearchSelect = document.querySelector(".searchSelect");
const formSearchQuery = document.querySelector(".searchQuery");

formSearchSelect.addEventListener("submit", e => {
  e.preventDefault();
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
      const target = document.querySelector("#carousel-news");
      target.innerHTML = markup;
      fixBrokenImage(".carousel-item__img");
    })
    .catch(error => {
      console.log(error);
    });
});

formSearchQuery.addEventListener("submit", e => {
  e.preventDefault();
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
      console.log(data);
      const target = document.querySelector("#carousel-news");
      if (data.articles.length === 0) {
        target.parentNode.classList.remove("hide");
        target.innerHTML = spinnerNotFound;
      } else {
        const markup = createCard(data);
        target.parentNode.classList.remove("hide");
        target.innerHTML = markup;
        fixBrokenImage(".carousel-item__img");
        document.querySelector("body").scrollIntoView({
          behavior: "smooth"
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
});
