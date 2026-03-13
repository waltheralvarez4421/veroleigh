document.addEventListener("DOMContentLoaded", function () {
  var pairs = [
    ["#basic-af-trigger-section", "#basic-af-open-section"],
    ["#bougie-af-trigger-section", "#bougie-af-open-section"],
    ["#extra-af-trigger-section", "#extra-af-open-section"],
    ["#mu-edit-trigger-section", "#mu-edit-open-section"],
  ];

  function closeAll() {
    pairs.forEach(function (pair) {
      var trigger = document.querySelector(pair[0]);
      var openSection = document.querySelector(pair[1]);
      if (trigger) trigger.classList.remove("open-service");
      if (openSection) openSection.classList.remove("open-service");
    });
  }

  pairs.forEach(function (pair) {
    var trigger = document.querySelector(pair[0]);
    var openSection = document.querySelector(pair[1]);

    if (openSection) {
      var images = openSection.querySelectorAll(".sqs-block-image");
      if (images[0]) images[0].classList.add("new");
      if (images[1]) images[1].classList.add("old");

      var buttons = openSection.querySelectorAll(
        ".sqs-button-element--secondary"
      );
      buttons.forEach(function (button) {
        button.setAttribute("disabled", "disabled");
      });
    }

    if (trigger && openSection) {
      trigger.addEventListener("click", function () {
        var isOpen = trigger.classList.contains("open-service");
        closeAll();
        if (!isOpen) {
          trigger.classList.add("open-service");
          openSection.classList.add("open-service");
        }
      });
    }
  });

  // Wrap text after "-" in accordion titles within #pricing-faq
  var faqTitles = document.querySelectorAll(
    "#pricing-faq .accordion-item__title"
  );
  faqTitles.forEach(function (title) {
    var text = title.textContent;
    var dashIndex = text.indexOf("-");
    if (dashIndex !== -1) {
      var before = text.substring(0, dashIndex + 1);
      var after = text.substring(dashIndex + 1).trim();
      title.innerHTML =
        before + ' <span class="accordion-title__detail">' + after + "</span>";
    }
  });
});
