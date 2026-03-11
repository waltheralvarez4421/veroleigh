document.addEventListener("DOMContentLoaded", function () {
  var pairs = [
    ["#basic-af-trigger-section", "#basic-af-open-section"],
    ["#bougie-af-trigger-section", "#bougie-af-open-section"],
    ["#extra-af-trigger-section", "#extra-af-open-section"],
    ["#mu-edit-trigger-section", "#mu-edit-open-section"],
  ];

  pairs.forEach(function (pair) {
    var trigger = document.querySelector(pair[0]);
    var openSection = document.querySelector(pair[1]);

    if (trigger && openSection) {
      trigger.addEventListener("click", function () {
        trigger.classList.toggle("open-service");
        openSection.classList.toggle("open-service");
      });
    }
  });
});
