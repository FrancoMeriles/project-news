import News from "../news/news";
import { createCard } from "../ui/card";
import { fixBrokenImage } from "../utility/fixBrokenImage";
import { spinnerNotFound, spinner } from "../ui/spinners";
import { setText } from "../utility/setText";

const formSearchSelect = document.querySelector(".searchSelect");
const formSearchQuery = document.querySelector(".searchQuery");
const target = document.querySelector("#carousel-news");

formSearchSelect.addEventListener("submit", e => {
  e.preventDefault();
  target.innerHTML = spinner;
  const country = document.querySelector("#country");
  const category = document.querySelector("#category");
  const searchNews = new News({
    country: country.value,
    category: category.value
  });

  searchNews
    .searchNews()
    .then(data => {
      let textValueCo = country.options[country.selectedIndex].text;
      let textValueCa = category.options[category.selectedIndex].text;
      setText({ country: textValueCo, category: textValueCa }, "two");
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
  const sources = document.querySelector("#sources");
  const q = document.querySelector("#query");
  const querySearch = new News({
    target: "everything",
    sources: sources.value,
    q: q.value
  });

  querySearch
    .queryNews()
    .then(data => {
      let sourcesText = sources.options[sources.selectedIndex].text;
      setText({ keysearch: q.value, sources: sourcesText }, "three");
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
