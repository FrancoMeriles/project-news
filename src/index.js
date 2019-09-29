import "bootstrap";
import "./sass/main.scss";

// JS files

import "./js/main";

//IIFE TEST ASYNC AWAIT
(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  //console.table(data);
})();
