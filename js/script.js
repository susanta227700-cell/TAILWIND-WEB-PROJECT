   const s = document.getElementById("sidebar");
      const o = document.getElementById("overlay");

      document.getElementById("menu-btn").onclick =
        document.getElementById("close-btn").onclick =
        o.onclick =
          () => {
            s.classList.toggle("translate-x-full");
            o.classList.toggle("opacity-0");
            o.classList.toggle("invisible");
          };







var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // 👈 এইটা add করো
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
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});