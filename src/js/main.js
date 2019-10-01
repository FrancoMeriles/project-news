import "./ui/menu";
import "./search/search";

import News from "./news/news";
import { userCountryData } from "./country/countryData";
import { createCard } from "./ui/card";
import { setText } from "./utility/setText";
import { fixBrokenImage } from "./utility/fixBrokenImage";
import { makeSelectSources } from "./ui/selectSources";

userCountryData.then(response => {
  if (response.status === "fail") {
    console.warn(response.message);
    const news = new News();
    createNews(news);
  } else {
    setText(response.country, "#title");
    const countryName = response.countryCode.toLowerCase();
    const countryNews = new News({ country: countryName });
    const sourcesNews = new News({
      target: "sources",
      country: countryName
    });
    createNews(countryNews);
    getSources(sourcesNews);
  }
});

const createNews = instanceNew => {
  instanceNew
    .latestNews()
    .then(data => {
      const markup = createCard(data);
      const target = document.querySelector("#carousel-news");
      target.innerHTML = markup;
      fixBrokenImage(".carousel-item__img");
    })
    .catch(error => {
      console.log(error);
    });
};

const getSources = sourcesNewsInstance => {
  sourcesNewsInstance.getSources().then(source => {
    makeSelectSources(source);
  });
};
