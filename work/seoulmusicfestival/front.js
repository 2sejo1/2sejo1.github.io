$(document).ready(function () {
  // 스크롤 발생 시 페이지 이동

  // //스크롤 발생 시 페이지 이동
  //side-mn-icon

  $(".side-mn-icon li a").click(function (e) {
    // 페이지 스르륵 이동
    href = $(this).attr("href"); // href에 넣어둔 위치값 가져와
    let sectTop = $(href).offset().top; //지정한 위치(섹션) 윈도우 창의 0의 위치에서 [각 섹션의 시작점]의 거리값을 구해줘
    $("html").stop().animate({ scrollTop: sectTop }); //이동 ㄱㄱ
    // // 페이지 스르륵 이동

    // 클래스 on 붙이기
    $(".side-mn-icon li a").removeClass("on");
    $(this).addClass("on");
    // //클래스 on 붙이기
  });

  $(window).scroll(function () {
    let scrTop = $(this).scrollTop();
    $("h5").text(scrTop);
  });

  // //side-mn-icon

  // header 배경색
  $(window).scroll(function () {
    let scrTop = $(this).scrollTop();
    if (scrTop > 0) {
      $(".header-box").addClass("on");
    } else {
      $(".header-box").removeClass("on");
    }
  });
  // //header 배경색

  // program info
  $(document).ready(function () {
    const programInfo = new Swiper(".program-info-swiper", {
      // 추가 옵션 설정
      slidesPerView: 3, // 한 화면에 나올 슬라이드 개수
      spaceBetween: 30, // 슬라이드 사이 간격 px
      loop: true, // 무한 반복 여부
      centeredSlides: true, //활성 슬라이드를 항상 가운데에 배치

      // 자동 재생 설정
      autoplay: {
        delay: 5000,
      },
    });
  });
  // //program info
  // infinite-slide-swiper
  $(document).ready(function () {
    const infiniteBanner = new Swiper(".infinite-banner-swiper", {
      // 추가 옵션 설정
      slidesPerView: 3, // 한 화면에 나올 슬라이드 개수
      spaceBetween: 30, // 슬라이드 사이 간격 px
      loop: true, // 무한 반복 여부
      speed: 5000, // 흐르는 스피드

      //스크롤바 사용 유무
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
      },

      // 자동 재생 설정
      autoplay: {
        delay: 0,
      },
    });
  });
  // //infinite-slide-swiper

  // gallery
  $(document).ready(function () {
    const gallerySwiper = new Swiper(".gallery-swiper", {
      // 추가 옵션 설정
      slidesPerView: 4, // 한 화면에 나올 슬라이드 개수
      spaceBetween: 30, // 슬라이드 사이 간격 px
      loop: true, // 무한 반복 여부
    });
  });
  // //gallery
});
