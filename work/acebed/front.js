$(document).ready(function () {
  // header::after 오퍼시티 : 1

  let navDiv = document.querySelectorAll("nav div");

  navDiv.forEach(function (navDiv) {
    navDiv.addEventListener("mouseover", function () {
      document.querySelector("header").classList.add("hover");
    });
  });

  navDiv.forEach(function (navDiv) {
    navDiv.addEventListener("mouseout", function () {
      document.querySelector("header").classList.remove("hover");
    });
  });

  // main visual swiper
  const mainVisualSwiper = new Swiper(".main-visual-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 20, // 슬라이드 사이 간격 px
    loop: false, // 무한 반복 여부
    mousewheel: false, //휠 스크롤 사용 유무

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

  // navigation btn : path

  // prev btn
  document
    .querySelector(".main-prev-btn")
    .addEventListener("mouseover", function () {
      document
        .querySelector(".btn-prev")
        .setAttribute("d", "M 40 10 Q 10 65 40 140");
    });

  document
    .querySelector(".main-prev-btn")
    .addEventListener("mouseout", function () {
      document
        .querySelector(".btn-prev")
        .setAttribute("d", "M 40 10 Q 40 65 40 140");
    });

  // next btn
  document
    .querySelector(".main-next-btn")
    .addEventListener("mouseover", function () {
      document
        .querySelector(".btn-next")
        .setAttribute("d", "M 10 10 Q 40 65 10 140");
    });

  document
    .querySelector(".main-next-btn")
    .addEventListener("mouseout", function () {
      document
        .querySelector(".btn-next")
        .setAttribute("d", "M 10 10 Q 10 65 10 140");
    });
  //// main visual swiper

  // science sect
  let slideMnLi = document.querySelectorAll(".slide-box .slide-mn li");

  slideMnLi.forEach(function (slideMnLi, idx) {
    slideMnLi.addEventListener("click", function () {
      // console.log(idx);
      // slide mn : add class "on"
      document
        .querySelector(".slide-box .slide-mn li.on")
        .classList.remove("on");
      this.classList.add("on");
      // video
      document.querySelector(".video-slide .video-wrapper").style.marginLeft =
        idx * -100 + "%";
      // txt box
      document.querySelector(".txt-slide .txt-wrapper").style.marginTop =
        idx * -300 + "px";
    });
  });
  // // science sect


  // collection

  // tab mn

  let collectionTab = document.querySelectorAll(".collection-sect .tab-mn li");

  collectionTab.forEach(function (collectionTab, idx) {
    collectionTab.addEventListener("click", function () {
      console.log(idx);
      // tab mn : add class "on"
      document
        .querySelector(".collection-sect .tab-mn li.on")
        .classList.remove("on");
      this.classList.add("on");

      // tab mn
      let findID = this.querySelector("a").getAttribute("href");
      document
        .querySelector(".collection-sect .slide-box.on")
        .classList.remove("on");
      document.querySelector(findID).classList.add("on");
      console.log(findID);
    });
  });

  // // tab mn

  // new swiper
  $(document).ready(function () {
    const newProductSwiper = new Swiper(".new-product-swiper", {
      // 추가 옵션 설정
      slidesPerView: 1.5, // 한 화면에 나올 슬라이드 개수
      spaceBetween: 50, // 슬라이드 사이 간격 px
      loop: false, // 무한 반복 여부
      centeredSlides: true, //활성 슬라이드를 항상 가운데에 배치

      //스크롤바 사용 유무
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: false, // 스크롤바를 드래그해서 움직일수 있는지 여부
      },

      // Navigation arrows 좌/우 컨트롤 버튼
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  // //new swiper

  // recommended
  $(document).ready(function () {
    const recommendedSwiper = new Swiper(".recommended-product-swiper", {
      // 추가 옵션 설정
      slidesPerView: 1.5, // 한 화면에 나올 슬라이드 개수
      spaceBetween: 50, // 슬라이드 사이 간격 px
      loop: false, // 무한 반복 여부
      centeredSlides: true, //활성 슬라이드를 항상 가운데에 배치

      //스크롤바 사용 유무
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: false,
        draggable: false, // 스크롤바를 드래그해서 움직일수 있는지 여부
      },

      // Navigation arrows 좌/우 컨트롤 버튼
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });
  // //recommended
  // //collection

  // news
  const newsSwiper = new Swiper(".news-swiper", {
    // 추가 옵션 설정
    slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 0, // 슬라이드 사이 간격 px
    loop: false, // 무한 반복 여부
    centeredSlides: false, //활성 슬라이드를 항상 가운데에 배치
  });
  // news

  var mySwiper = new Swiper(".mySwiper3", {
    on: {
      slideChange: function () {
        // 현재 활성화된 슬라이드의 인덱스 가져오기
        var activeSlideIndex = this.activeIndex;

        // 모든 탭에서 'on' 클래스 제거 및 현재 활성화된 슬라이드에 해당하는 탭에 'on' 클래스 추가
        $(".tab-tab li a")
          .removeClass("on")
          .eq(activeSlideIndex)
          .addClass("on");
      },
    },
  });

  $(".tab-tab li a").click(function () {
    // 클릭한 탭에 'on' 클래스 추가
    $(this).addClass("on");

    // 클릭한 탭의 인덱스를 가져와 해당 슬라이드로 이동
    var tabIndex = $(this).parent().index();
    mySwiper.slideTo(tabIndex);
  });
});
