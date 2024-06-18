$(document).ready(function () {
  //press
  const pressSwiper = new Swiper(".press-swiper", {
    // 추가 옵션 설정
    slidesPerView: "auto", // 한 화면에 나올 슬라이드 개수
    loop: false, // 무한 반복 여부
    centeredSlides: false, //활성 슬라이드를 항상 가운데에 배치

    // Responsive breakpoints 반응형 분기
    // breakpoints: {
    //   640: {
    //     slidesPerView: 2.5,
    //     spaceBetween: 20,
    //   },
    //   480: {
    //     slidesPerView: 2,
    //     spaceBetween: 30,
    //   },
    //   320: {
    //     slidesPerView: 1.5,
    //     spaceBetween: 40,
    //   },
    // },

    // Navigation arrows 좌/우 컨트롤 버튼
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });

  document.querySelector(".prev-btn").addEventListener("click", function () {
    pressSwiper.slidePrev();
  });
  document.querySelector(".next-btn").addEventListener("click", function () {
    pressSwiper.slideNext();
  });

  // //press
});
