
/* NAVBAR TOGGLE */
const s = document.getElementById("sidebar");
const o = document.getElementById("overlay");

document.getElementById("menu-btn").onclick =
document.getElementById("close-btn").onclick =
o.onclick = () => {
  s.classList.toggle("translate-x-full");
  o.classList.toggle("opacity-0");
  o.classList.toggle("invisible");
};



/* OVERVIEW SWIPER PART */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});


/* OVERVIEW MOBILE CLICK PART  */
document.addEventListener("click", function (e) {

  if (window.innerWidth >= 768) return;

  const card = e.target.closest(".group");
  if (!card) return;

  const content = card.querySelector(".absolute.bottom-0");
  if (!content) return;

  content.classList.toggle("opacity-100");
  content.classList.toggle("translate-y-0");
  content.classList.toggle("opacity-0");
  content.classList.toggle("translate-y-16");

});
