const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const dots = document.querySelectorAll(".dot");

  let index = 0;
  const total = carousel.children.length;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("opacity-70", i === index);
      dot.classList.toggle("opacity-30", i !== index);
    });
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % total;
    updateCarousel();
  });

  prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateCarousel();
    });
  });

  // auto-play
  setInterval(() => {
    index = (index + 1) % total;
    updateCarousel();
  }, 5000);

  updateCarousel();