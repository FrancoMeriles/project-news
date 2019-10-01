const queryForm = document.querySelector(".searchQuery");
const selectForm = document.querySelector(".searchSelect");

const SEARCH_QUERY = "searchQuery";
const SEARCH_SELECT = "searchSelect";

export const showForm = form => {
  form === SEARCH_QUERY
    ? queryForm.classList.add("show")
    : queryForm.classList.remove("show");

  form === SEARCH_SELECT
    ? selectForm.classList.add("show")
    : selectForm.classList.remove("show");
};
