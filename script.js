gsap.registerPlugin(ScrollTrigger);

// Tipe Restoran section

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const cardWrapper = document.querySelector(".card-wrapper");
const cards = document.querySelectorAll(".card");

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth;

next.addEventListener("click", function () {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
    cardWrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
});

prev.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    cardWrapper.style.transform = `translateX(-${cardWidth * currentIndex}px)`;
  }
});

// masakan section
// scroll horizontal food-card
const foodCards = gsap.utils.toArray(".food-card");

gsap.to(foodCards, {
  xPercent: -100 * (foodCards.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".food-cards-wrapper",
    pin: true,
    scrub: 0.3,
    snap: 1 / (foodCards.length - 1),
    end: () =>
      "+=" +
      (document.querySelector(".food-cards-wrapper").offsetWidth -
        window.innerWidth),
  },
});

// tombol info, bahan, gizi
document.addEventListener("DOMContentLoaded", () => {
  const cardContent = document.querySelector(".card-content");
  const offsetH = cardContent.offsetHeight;
  const btnInfo = document.querySelectorAll(".btn-info");
  const btnBahan = document.querySelectorAll(".btn-bahan");
  const btnGizi = document.querySelectorAll(".btn-gizi");

  btnInfo.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTranslate = -0 * offsetH;
      const card = btn.closest(".food-card");
      const scrollContainer = card.querySelector(".scroll-container");

      goTo(scrollContainer, targetTranslate);
    });
  });
  btnBahan.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTranslate = -1 * offsetH;
      const card = btn.closest(".food-card");
      const scrollContainer = card.querySelector(".scroll-container");

      goTo(scrollContainer, targetTranslate);
    });
  });
  btnGizi.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetTranslate = -2 * offsetH;
      const card = btn.closest(".food-card");
      const scrollContainer = card.querySelector(".scroll-container");

      goTo(scrollContainer, targetTranslate);
    });
  });

  function goTo(scrollContainer, target) {
    scrollContainer.style.transition = "transform 0.6s ease";
    scrollContainer.style.transform = `translateY(${target}px)`;
  }
});
