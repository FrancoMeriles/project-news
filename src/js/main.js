import "./ui/menu";
import "./search/search";

import News from "./news/news";
import { userCountryData } from "./country/countryData";
import { spinner } from "./ui/spinners";
import { target } from "./ui/targets";
import { setText } from "./utility/setText";
import { createNews } from "./news/createNews";
import { createSources } from "./news/createSources";

userCountryData.then(response => {
  target.innerHTML = spinner;
  if (response.status === "fail") {
    console.warn(response.message);
    const news = new News();
    createNews(news);
  } else {
    setText({ country: response.country }, "one");
    const countryName = response.countryCode.toLowerCase();
    const countryNews = new News({ country: countryName });
    const sourcesNews = new News({
      target: "sources",
      country: countryName
    });
    createNews(countryNews);
    createSources(sourcesNews);
  }
});
