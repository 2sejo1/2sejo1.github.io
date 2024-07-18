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

// sect1
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

// // sect1

// sect2
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
      $(".sect2 .txt-area .txt-wrap .txt").removeClass("on");
      $(".sect2 .txt-area .txt-wrap .txt").eq(activeIndex).addClass("on");
    },
    slideChangeTransitionStart: function () {
      // 슬라이드 전환이 시작될 때 모든 .on 클래스를 제거
      $(".sect2 .txt-area .txt-wrap .txt").removeClass("on");
      // 슬라이드 전환이 시작될 때 전환 직전 슬라이드의 인덱스에 해당하는 텍스트에 .prev 클래스를 추가
      const previousIndex = this.previousIndex;
      $(".sect2 .txt-area .txt-wrap .txt").eq(previousIndex).addClass("prev");
      //현재 활성 슬라이드 인덱스에 해당하는 텍스트에 .on 클래스를 추가
      const activeIndex = this.activeIndex;
      $(".sect2 .txt-area .txt-wrap .txt").eq(activeIndex).addClass("on");
    },
    slideChangeTransitionEnd: function () {
      $(".sect2 .txt-area .txt-wrap .txt").removeClass("prev");
    },
  },
});

$(".sect2 .swiper-pagination span").eq(0).text("HYBRID Z SPRING");
$(".sect2 .swiper-pagination span").eq(1).text("5 FREE SYSTEM");
$(".sect2 .swiper-pagination span").eq(2).text("NEW MATERIAL");
$(".sect2 .swiper-pagination span").eq(3).text("ECO & HEALTH");

// // sect2

// sect3

// tab
document.querySelectorAll(".sect3 .tab-list li a").forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sect3 .tab-list li .on").classList.remove("on");
    this.classList.add("on");
    let href = this.getAttribute("href");
    document.querySelector(".sect3 .product-wrap .on").classList.remove("on");
    document.querySelector(href).classList.add("on");
  });
});

// // tab

// swiper
const sect3NewWebSwiper = new Swiper(".sect3-new-web-swiper", {
  // 추가 옵션 설정
  slidesPerView: 1.5, // 한 화면에 나올 슬라이드 개수
  spaceBetween: 50, // 슬라이드 사이 간격 px
  loop: false, // 무한 반복 여부
  centeredSlides: true, // 활성 슬라이드를 가운데 배치

  // Responsive breakpoints 반응형 분기
  breakpoints: {
    1700: {
      slidesPerView: 1.3,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 1.2,
      spaceBetween: 50,
    },
    1700: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    944: {
      slidesPerView: 1.25,
      spaceBetween: 50,
    },
  },

  //스크롤바 사용 유무
  scrollbar: {
    el: ".sect3 #new-product .only-web .swiper-scrollbar",
    hide: false,
    draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
  },

  // If we need pagination 슬라이드 개수 표시 인디케이터
  pagination: {
    el: ".sect3 #new-product .only-web .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".sect3 #new-product .only-web .swiper-button-next",
    prevEl: ".sect3 #new-product .only-web .swiper-button-prev",
  },
});

const sect3NewMobSwiper = new Swiper(".sect3-new-mob-swiper", {
  // 추가 옵션 설정
  slidesPerView: 2.5, // 한 화면에 나올 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 간격 px
  loop: false, // 무한 반복 여부

  breakpoints: {
    800: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  },

  //스크롤바 사용 유무
  scrollbar: {
    el: ".sect3 #new-product .only-mob .swiper-scrollbar",
    hide: false,
    draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
  },

  // If we need pagination 슬라이드 개수 표시 인디케이터
  pagination: {
    el: ".sect3 #new-product .only-mob .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".sect3 #new-product .only-mob .swiper-button-next",
    prevEl: ".sect3 #new-product .only-mob .swiper-button-prev",
  },
});

const sect3RecommendedWebSwiper = new Swiper(".sect3-recommended-web-swiper", {
  // 추가 옵션 설정
  slidesPerView: 1.5, // 한 화면에 나올 슬라이드 개수
  spaceBetween: 50, // 슬라이드 사이 간격 px
  loop: false, // 무한 반복 여부
  centeredSlides: true, // 활성 슬라이드를 가운데 배치

  // Responsive breakpoints 반응형 분기
  breakpoints: {
    1700: {
      slidesPerView: 1.3,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 1.2,
      spaceBetween: 50,
    },
    1700: {
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    944: {
      slidesPerView: 1.25,
      spaceBetween: 50,
    },
  },

  //스크롤바 사용 유무
  scrollbar: {
    el: ".sect3 #recommended-product .only-web .swiper-scrollbar",
    hide: false,
    draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
  },

  // If we need pagination 슬라이드 개수 표시 인디케이터
  pagination: {
    el: ".sect3 #recommended-product .only-web .swiper-pagination",
    clickable: true,
  },

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".sect3 #recommended-product .only-web .swiper-button-next",
    prevEl: ".sect3 #recommended-product .only-web .swiper-button-prev",
  },
});

const sect3RecommendedMobSwiper = new Swiper(".sect3-recommended-mob-swiper", {
  // 추가 옵션 설정
  slidesPerView: 2.5, // 한 화면에 나올 슬라이드 개수
  spaceBetween: 30, // 슬라이드 사이 간격 px
  loop: false, // 무한 반복 여부

  breakpoints: {
    800: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
    720: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
  },

  //스크롤바 사용 유무
  scrollbar: {
    el: ".sect3 #recommended-product .only-mob .swiper-scrollbar",
    hide: false,
    draggable: true, // 스크롤바를 드래그해서 움직일수 있는지 여부
  },

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".sect3 #recommended-product .only-mob .swiper-button-next",
    prevEl: ".sect3 #recommended-product .only-mob .swiper-button-prev",
  },
});
// // swiper

// //sect3

//  sect4
const sect4Swiper = new Swiper(".sect4-swiper", {
  // 추가 옵션 설정
  speed: 1000,
  slidesPerView: 1,
  loop: true, // 무한 반복 여부

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".sect4 .swiper-next-btn",
  },

  observer: true,
  observeparents: true,
  noSwiping: true,
  noSwipingClass: "subvis-stop-swiping",
  updateOnWindowResize: true,

  on: {
    init: function () {
      // 슬라이더가 초기화될 때 첫 번째 슬라이드의 텍스트에 .on 클래스를 추가
      const activeIndex = this.realIndex;
      $(".sect4 .menu-box a").removeClass("on");
      $(".sect4 .menu-box a").eq(activeIndex).addClass("on");
      console.log(activeIndex);
    },
    slideChangeTransitionStart: function () {
      // 슬라이드 전환이 시작될 때 모든 .on 클래스를 제거
      $(".sect4 .menu-box a").removeClass("on");

      //현재 활성 슬라이드 인덱스에 해당하는 텍스트에 .on 클래스를 추가
      const activeIndex = this.realIndex;
      $(".sect4 .menu-box a").eq(activeIndex).addClass("on");
      console.log(activeIndex);
    },
  },
});

$(".sect4 .menu-box a").on("click", function (e) {
  e.preventDefault();
  const index = $(this).data("index");
  sect4Swiper.slideToLoop(index);
});
// // sect4

// footer

document
  .querySelector("footer .family-box .open")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector("footer .family-box .site-list")
      .classList.toggle("on");
  });
// //footer
