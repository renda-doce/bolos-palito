const carousel = document.getElementById("carousel");

let offset = 0;
let speed = 0.5; // pixels por frame (~30px/s)
let paused = false;

function animate() {
  if (!paused) {
    offset -= speed;
    if (Math.abs(offset) >= carousel.scrollWidth / 2) {
      offset = 0; // reinicia quando chega na metade (porque duplicamos os itens)
    }
    carousel.style.transform = `translateX(${offset}px)`;
  }
  requestAnimationFrame(animate);
}

animate();

// pausa no hover
carousel.parentElement.addEventListener("mouseenter", () => paused = true);
carousel.parentElement.addEventListener("mouseleave", () => paused = false);
