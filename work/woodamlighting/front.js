$(document).ready(function () {
  // swiper
  const swiper = new Swiper(".swiper", {
    // 추가 옵션 설정
    slidesPerView: 4, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 10, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteration: false,
    },
  });

  $(".menu li").click(function () {
    e.preventDefault();
    let i = $(this).index();

    $(".menu li a").removeClass("on");
    $(this).find("a").addClass("on");
    swiper.slideTo(i, 500);
  });

  swiper.on("slideChange", function () {
    let idx = activeIndex;
    // 모든 메뉴 클래스 지워줘
    // 인덱스 번쨰의 메뉴에 클래스를 붙여줘
  });
});
