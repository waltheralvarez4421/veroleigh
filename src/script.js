document.addEventListener("DOMContentLoaded", function () {
  var trigger = document.querySelector("#basic-af-trigger-section");
  var openSection = document.querySelector("#basic-af-open-section");

  trigger.addEventListener("click", function () {
    trigger.classList.toggle("open-service");
    openSection.classList.toggle("open-service");
  });
});
