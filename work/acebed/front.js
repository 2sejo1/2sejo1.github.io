// nav
document.querySelectorAll(".nav-box").forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    this.classList.add("on");
    document.querySelector("nav").classList.add("on");
  });
  e.addEventListener("focusin", function () {
    this.classList.add("on");
    document.querySelector("nav").classList.add("on");
  });
  //
  //
  e.addEventListener("mouseleave", function () {
    this.classList.remove("on");
    document.querySelector("nav").classList.remove("on");
  });
  e.addEventListener("focusout", function () {
    this.classList.remove("on");
    document.querySelector("nav").classList.remove("on");
  });
});
// // nav

//  slide btn path
// prev btn
document.querySelectorAll(".main-prev-btn").forEach(function (e) {
  e.addEventListener("mouseover", function () {
    this.querySelector(".btn-prev").setAttribute("d", "M 40 10 Q 10 65 40 140");
  });
});

document.querySelectorAll(".main-prev-btn").forEach(function (e) {
  e.addEventListener("mouseout", function () {
    this.querySelector(".btn-prev").setAttribute("d", "M 40 10 Q 40 65 40 140");
  });
});

// next btn
document.querySelectorAll(".main-next-btn").forEach(function (e) {
  e.addEventListener("mouseover", function () {
    this.querySelector(".btn-next").setAttribute("d", "M 10 10 Q 40 65 10 140");
  });
});

document.querySelectorAll(".main-next-btn").forEach(function (e) {
  e.addEventListener("mouseout", function () {
    this.querySelector(".btn-next").setAttribute("d", "M 10 10 Q 10 65 10 140");
  });
});
// // slide btn path

const mainVisualSwiper = new Swiper(".main-visual-swiper", {
  // 추가 옵션 설정
  slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
  loop: false, // 무한 반복 여부

  // 자동 재생 설정
  autoplay: {
    delay: 5000,
  },

  // If we need pagination 슬라이드 개수 표시 인디케이터
  pagination: {
    el: ".sect1 .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".sect1 .swiper-button-next",
    prevEl: ".sect1 .swiper-button-prev",
  },
});

const sect2Swiper = new Swiper(".sect2-swiper", {
  // 추가 옵션 설정
  speed: 1000,
  slidesPerView: 1,

  // If we need pagination 슬라이드 개수 표시 인디케이터
  pagination: {
    el: ".sect2 .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".sect2 .swiper-button-next",
    prevEl: ".sect2 .swiper-button-prev",
  },

  observer: true,
  observeparents: true,
  noSwiping: true,
  noSwipingClass: "subvis-stop-swiping",
  updateOnWindowResize: true,

  on: {
    init: function () {
      // 슬라이더가 초기화될 때 첫 번째 슬라이드의 텍스트에 .on 클래스를 추가
      const activeIndex = this.activeIndex;
      $(".txt-area .txt-wrap .txt").removeClass("on");
      $(".txt-area .txt-wrap .txt").eq(activeIndex).addClass("on");
    },
    slideChangeTransitionStart: function () {
      // 슬라이드 전환이 시작될 때 모든 .on 클래스를 제거
      $(".txt-area .txt-wrap .txt").removeClass("on");
      // 슬라이드 전환이 시작될 때 전환 직전 슬라이드의 인덱스에 해당하는 텍스트에 .prev 클래스를 추가
      const previousIndex = this.previousIndex;
      $(".txt-area .txt-wrap .txt").eq(previousIndex).addClass("prev");
      //현재 활성 슬라이드 인덱스에 해당하는 텍스트에 .on 클래스를 추가
      const activeIndex = this.activeIndex;
      $(".txt-area .txt-wrap .txt").eq(activeIndex).addClass("on");
    },
    slideChangeTransitionEnd: function () {
      $(".txt-area .txt-wrap .txt").removeClass("prev");
    },
  },
});

$(".sect2 .swiper-pagination span").eq(0).text("HYBRID Z SPRING");
$(".sect2 .swiper-pagination span").eq(1).text("5 FREE SYSTEM");
$(".sect2 .swiper-pagination span").eq(2).text("NEW MATERIAL");
$(".sect2 .swiper-pagination span").eq(3).text("ECO & HEALTH");
