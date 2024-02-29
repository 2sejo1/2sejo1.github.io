$(document).ready(function () {
  //main visual swiper
  const mainSwiper = new Swiper(".main-visual-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    // effect: "fade", // fade 효과 사용

    // 자동 재생 설정
    autoplay: {
      delay: 5000,
    },

    // If we need pagination 슬라이드 개수 표시 인디케이터
    pagination: {
      el: ".swiper-pagination",
    },

    // //main visual swiper
  });
});
