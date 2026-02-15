const faqItems = document.querySelectorAll(".faq__item");

faqItems.forEach((item) => {
  const questionBtn = item.querySelector(".faq__question");
  const answer = item.querySelector(".faq__answer");

  questionBtn.addEventListener("click", () => {
    const isExpanded = item.classList.contains("faq__item--expanded");

    faqItems.forEach((el) => {
      el.classList.remove("faq__item--expanded");
      el.querySelector(".faq__answer").classList.add("faq__answer--hidden");
    });

    if (!isExpanded) {
      item.classList.add("faq__item--expanded");
      answer.classList.remove("faq__answer--hidden");
    }
  });
});
