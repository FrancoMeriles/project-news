import { showForm } from "./showForm";

// Get all anchor tags
const links = document.querySelectorAll(".nav-link");

// Loop them and remove existing active class add a click listener
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    removeActiveLinks();
    showForm(e.target.dataset.form);
    e.target.parentElement.classList.add("active");
  });
});

// Remove all active clases from anchor tags
const removeActiveLinks = () => {
  links.forEach(link => {
    if (link.parentElement.classList.contains("active")) {
      link.parentElement.classList.remove("active");
    }
  });
};
