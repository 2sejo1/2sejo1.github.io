document.addEventListener("DOMContentLoaded", function () {
  //bg video speed
  document.querySelectorAll(".bg-video").forEach(function (video) {
    video.playbackRate = 0.6;
  });

  //main swiper
  const mainSwiper = new Swiper(".main-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부

    autoplay: {
      delay: 5000,
    },
  });

  //discovery swiper
  const discoverySwiper = new Swiper(".discovery-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 20, // 슬라이드 사이 간격 px
    // loop: true, // 무한 반복 여부
    mousewheel: true,

    // autoplay: {
    //   delay: 5000,
    // },

    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
    },

    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $(".about-btn").click(function () {
    mainHide();
    aboutShow();
  });

  $("section.about .close-btn").click(function () {
    aboutHide();
    mainShow();
  });

  $(".discovery-btn").click(function () {
    mainHide();
    discoveryShow();
  });

  $("section.discovery .close-btn").click(function () {
    discoveryHide();
    mainShow();
  });

  //메인 나가
  // function mainHide() {
  //   $(".title-box").css({ transform: "translateY(-500px)" });
  //   $(".main-content-box").css({ transform: "translateX(-2000px)" });
  //   $(".side-img").css({
  //     transform: "rotate(360deg) scale(0.4)",
  //     right: "-60px",
  //     bottom: "-135px",
  //   });
  // }

  function mainHide() {
    document.querySelector(".title-box").style.transform = "translateY(-500px)";
    document.querySelector(".main-content-box").style.transform =
      "translateX(-2000px)";
    document.querySelector(".side-img").classList.add("on");
  }

  //메인 들어와
  function mainShow() {
    $(".title-box").css({ transform: "translateY(0px)" });
    $(".main-content-box").css({ transform: "translateX(0px)" });
    $(".side-img").css({
      transform: "rotate(0deg) scale(1)",
      right: "0px",
      bottom: "110px",
    });
  }

  //어바웃 나와
  function aboutShow() {
    $("section.about").fadeIn(1000);
    $("section.about").animate({ width: "1500px" });
  }

  //어바웃 들어가

  function aboutHide() {
    $("section.about").animate({ width: "0px" });
    $("section.about").fadeOut(500);
  }

  //디스커버리 나와

  function discoveryShow() {
    $("section.discovery").fadeIn(500);
    $(".discovery-swiper").animate({ height: "60vh" }, 1000);
  }

  //디스커버리 들어가
  function discoveryHide() {
    $(".discovery-swiper").animate({ height: "0vh" }, 500);
    $("section.discovery").fadeOut(500);
  }
});
