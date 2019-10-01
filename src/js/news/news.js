import { defaultSettings } from "./defaultSettings";
import * as api from "./keys";

class News {
  constructor({ target, country, category, q, sources }) {
    this.target = target || defaultSettings.target;
    this.country = country || defaultSettings.country;
    this.category = category || defaultSettings.category;
    this.q = q || defaultSettings.query;
    this.sources = sources || defaultSettings.sources;
  }

  latestNews() {
    const url = `${api.baseURL}${this.target}?country=${this.country}`;
    return this.makeRequest(url);
  }

  searchNews() {
    const url = `${api.baseURL}${this.target}?country=${this.country}&category=${this.category}`;
    return this.makeRequest(url);
  }

  getSources() {
    const url = `${api.baseURL}${this.target}?country=${this.country}`;
    return this.makeRequest(url);
  }

  queryNews() {
    const url = `${api.baseURL}${this.target}?sources=${this.sources}&q=${this.q}`;
    return this.makeRequest(url);
  }

  makeRequest(url) {
    return fetch(`${url}&apiKey=${api.apiKey}`)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.error(err));
  }
}

export default News;
