const container = document.getElementById("footer");
const navigation = document.getElementById("navigation");

fetch("./navigator.html")
  .then((response) => response.text())
  .then((html) => (navigation.innerHTML = html))
  .catch((error) => console.error(error));

fetch("./footer.html")
  .then((response) => response.text())
  .then((html) => (container.innerHTML = html))
  .catch((error) => console.error(error));

//FOR DROPDOWN MENU NAVIGATION
const dropdown = document.getElementById("dropdown");
const services = document.querySelector(".services");

services.addEventListener("mouseover", function () {
  dropdown.style.display = "block";
});

services.addEventListener("mouseout", function () {
  dropdown.style.display = "none";
});

dropdown.addEventListener("mouseover", function () {
  dropdown.style.display = "block";
});

dropdown.addEventListener("mouseleave", function () {
  dropdown.style.display = "none";
});

// SCROLL HORIZONTAL EVENT LISTENER SECTION 2 HOMEPAGE

$(document).ready(function () {
  $.ajax({
    url: "navigator.html",

    caches: false,
    success: function (data) {
      $("#navContainer").html(data);
    },
  });
  $.ajax({
    url: "footer.html",

    caches: false,
    success: function (data) {
      $("#footerContainer").html(data);
    },
  });
});
