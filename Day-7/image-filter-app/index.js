const tabs = document.querySelector(".tabs");
const gallery = document.querySelectorAll(".images");

tabs.addEventListener("click", (event) => {
  console.log(event.target.dataset.category);
  if (event.target.dataset.category !== undefined)
    filterSearch(event.target.dataset.category);
});

const filterSearch = (value) => {
  gallery.forEach((item) => {
    if (item.dataset.category === value || value === "all") {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
