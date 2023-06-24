var swiper = new Swiper(".mySwiper", {
    slidesPerView: "3",
    spaceBetween: 5,
    autoplay: {
        delay : 2500,
        disableOnInteraction: false,
        },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });