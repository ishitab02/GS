document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const menu = document.querySelector(".menu");

  toggleButton.addEventListener("click", function () {
    // Toggle the visibility of the menu
    menu.classList.toggle("hidden");
  });
});
