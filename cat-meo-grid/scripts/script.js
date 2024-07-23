document.getElementById("bars").addEventListener("click", () => {
  var links = document.getElementById("links");
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
});

window.addEventListener("resize", () => {
  var links = document.getElementById("links");
  if (window.innerWidth > 768) {
    links.style.display = "flex";
  } else {
    links.style.display = "none";
  }
});
