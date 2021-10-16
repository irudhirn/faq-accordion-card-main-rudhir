const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq, index) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
    console.log(index);
  });
});
