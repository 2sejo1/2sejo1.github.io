$(document).ready(function () {
  // gnb hover + focus
  $(function () {
    $("#gnb > ul > li").hover(
      function () {
        $("#gnb").addClass("active");
      },
      function () {
        $("#gnb").removeClass("active");
      }
    );
    $("#gnb > ul > li:first-child > a").focusin(function () {
      $("#gnb").addClass("active");
    });
    $("#gnb li:last-child li:last-child a").focusout(function () {
      $("#gnb").removeClass("active");
    });
    $("#gnb > ul > li > a").focusin(function () {
      $(this).parent().addClass("active");
    });
    $("#gnb li li:last-child a").focusout(function () {
      $("#gnb > ul > li").removeClass("active");
    });
  });
  // //gnb hover + focus

  // Mobile Menu Open/Close
  $(".btn-nav").on("click", function () {
    $("body").toggleClass("gnb-open");
  });
  // // Mobile Menu Open/Close

  // main event swiper
  const swiperEvent = new Swiper(".swiper-event", {
    // 추가 옵션 설정
    slidesPerView: 1.5, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 50, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    centeredSlides: true, //활성 슬라이드를 항상 가운데에 배치

    // If we need pagination 슬라이드 개수 표시 인디케이터
    pagination: {
      // 페이저 버튼 사용자 설정
      el: ".swiper-pagination", // 페이저 버튼을 담을 태그 설정
      clickable: true, // 버튼 클릭 여부
      type: "bullets", // 버튼 모양 결정 "bullets", "fraction"
    },

    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 자동 재생 기능
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    // Responsive breakpoints 반응형 분기
    // breakpoints: {
    // 	640: {
    // 		slidesPerView: 2.5,
    // 		spaceBetween: 20
    // 	},
    // 	480: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 30
    // 	},
    // 	320: {
    // 		slidesPerView: 1.5,
    // 		spaceBetween: 40
    // 	}
    // },
  });
  // //main event swiper

  // hot issue swiper
  const swiperHotIssue = new Swiper(".swiper-hot-issue", {
    // 추가 옵션 설정
    slidesPerView: 5, // 한 화면에 나올 슬라이드 개수
    slidesPerGroup: 5, // 슬라이드 그룹화 : 한번에 움직일 슬라이드
    spaceBetween: 20, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    centeredSlides: true, //활성 슬라이드를 항상 가운데에 배치

    // If we need pagination 슬라이드 개수 표시 인디케이터
    pagination: {
      // 페이저 버튼 사용자 설정
      el: ".swiper-pagination", // 페이저 버튼을 담을 태그 설정
      clickable: true, // 버튼 클릭 여부
      type: "bullets", // 버튼 모양 결정 "bullets", "fraction"
    },

    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 자동 재생 기능
    autoplay: {
      delay: 8000,
      disableOnInteraction: false, //스와이프 후 자동재생 비활성화
    },

    // Responsive breakpoints 반응형 분기
    // breakpoints: {
    // 	640: {
    // 		slidesPerView: 2.5,
    // 		spaceBetween: 20
    // 	},
    // 	480: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 30
    // 	},
    // 	320: {
    // 		slidesPerView: 1.5,
    // 		spaceBetween: 40
    // 	}
    // },
  });
  // //hot issue swiper

  // present product
  const swiperPresent = new Swiper(".swiper-present", {
    // 추가 옵션 설정
    slidesPerView: 5, // 한 화면에 나올 슬라이드 개수
    slidesPerGroup: 5, // 슬라이드 그룹화 : 한번에 움직일 슬라이드
    spaceBetween: 15, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    centeredSlides: true, //활성 슬라이드를 항상 가운데에 배치

    // If we need pagination 슬라이드 개수 표시 인디케이터
    pagination: {
      // 페이저 버튼 사용자 설정
      el: ".swiper-pagination", // 페이저 버튼을 담을 태그 설정
      clickable: true, // 버튼 클릭 여부
      type: "bullets", // 버튼 모양 결정 "bullets", "fraction"
    },

    // Navigation arrows 좌/우 컨트롤 버튼
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // 자동 재생 기능
    autoplay: {
      delay: 8000,
      disableOnInteraction: false, //스와이프 후 자동재생 비활성화
    },

    // Responsive breakpoints 반응형 분기
    // breakpoints: {
    // 	640: {
    // 		slidesPerView: 2.5,
    // 		spaceBetween: 20
    // 	},
    // 	480: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 30
    // 	},
    // 	320: {
    // 		slidesPerView: 1.5,
    // 		spaceBetween: 40
    // 	}
    // },
  });
  // //present product

  // swiper nice to cu
  const swiperNiceCU = new Swiper(".swiper-nicecu", {
    // 추가 옵션 설정
    slidesPerView: 1.2, // 한 화면에 나올 슬라이드 개수
    spaceBetween: 200, // 슬라이드 사이 간격 px
    loop: true, // 무한 반복 여부
    // loopAdditionalSlides : 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
    centeredSlides: true, //활성 슬라이드를 항상 가운데에 배치

    // If we need pagination 슬라이드 개수 표시 인디케이터
    pagination: {
      // 페이저 버튼 사용자 설정
      el: ".swiper-pagination", // 페이저 버튼을 담을 태그 설정
      clickable: true, // 버튼 클릭 여부
      type: "bullets", // 버튼 모양 결정 "bullets", "fraction"
    },

    // 자동 재생 기능
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, //스와이프 후 자동재생 비활성화
    },

    // Responsive breakpoints 반응형 분기
    // breakpoints: {
    // 	640: {
    // 		slidesPerView: 2.5,
    // 		spaceBetween: 20
    // 	},
    // 	480: {
    // 		slidesPerView: 2,
    // 		spaceBetween: 30
    // 	},
    // 	320: {
    // 		slidesPerView: 1.5,
    // 		spaceBetween: 40
    // 	}
    // },
  });
  // //swiper nice to cu
});
