document.addEventListener("DOMContentLoaded", function () {
  let experienceCards = document.querySelectorAll(".experience-card");

  experienceCards.forEach(function (card) {
    let btn = card.querySelector(".experience-btn");

    btn.addEventListener("click", function () {
      let details = card.querySelector(".experience-details");

      card.classList.toggle("open");
    });
  });
});
