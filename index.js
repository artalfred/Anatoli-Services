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
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", function () {
  document.querySelector(".services-parent").scrollLeft += 280;
});

prev.addEventListener("click", function () {
  document.querySelector(".services-parent").scrollLeft += -280;
});

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
