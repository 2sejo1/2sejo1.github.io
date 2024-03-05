$(document).ready(function () {
  const mainiper = new Swiper(".main-swiper", {
    mousewheel: true, //휠 스크롤 사용 유무

    // 자동 재생 설정
    // autoplay: {
    //   delay: 5000,
    // },

    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
