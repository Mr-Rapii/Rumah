// Musik kontrol
const musik = document.getElementById("musik");

// Klik layar untuk pause/play musik
document.body.addEventListener("click", () => {
  if (musik.paused) {
    musik.play();
  } else {
    musik.pause();
  }
});

// Efek scroll untuk gambar
window.addEventListener("scroll", () => {
  const gambar = document.querySelector(".gambar img");
  gambar.style.transform = `translateY(${window.scrollY * 0.2}px)`;
});
