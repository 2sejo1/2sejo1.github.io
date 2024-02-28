$(document).ready(function () {
  // main visual
  const mainVisual = new Swiper(".main-visual-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    effect: "fade", // fade 효과 사용

    //스크롤바 사용 유무
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
    },

    // 자동 재생 설정
    autoplay: {
      delay: 5000,
    },

    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // //main visual

  // bnr slide
  const bnrSlide = new Swiper(".bnr-slide-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부

    // 자동 재생 설정
    autoplay: {
      delay: 5000,
    },
  });
  // //bnr slide
  //review
  const reviewSwiper = new Swiper(".review-swiper", {
    // 추가 옵션 설정
    slidesPerView: "auto", // 한 화면에 나올 슬라이드 개수
    spaceBetween: 50, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    centeredSlides: true, //활성 슬라이드를 항상 가운데에 배치

    // 자동 재생 설정
    autoplay: {
      delay: 5000,
    },
    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // //review
});
