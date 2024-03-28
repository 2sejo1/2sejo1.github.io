document.addEventListener("DOMContentLoaded", function () {
  // sect1 swiper

  const mainVisualSwiper = new Swiper(".main-visual-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    effect: "fade", // fade 효과 사용

    // 자동 재생 설정
    autoplay: {
      delay: 5000,
    },
  });

  // //sect1 swiper

  //sect3 swiper
  const eventSwiper = new Swiper(".event-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 50, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부

    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  //  //sect3 swiper
});
