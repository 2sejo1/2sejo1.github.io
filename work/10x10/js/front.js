const mainVisualSwiper = new Swiper(".main-visual-swiper", {
  // 추가 옵션 설정
  loop: true, // 무한 반복 여부
  effect: "fade", // fade 효과 사용

  // 자동 재생 설정
  autoplay: {
    delay: 5000,
  },

  // If we need pagination 슬라이드 개수 표시 인디케이터
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// auto play 마우스 엔터 시 stop, 마우스 리브시 play
// 바닐라 스크립트로 할 경우 클리어 인터벌 (셋 인터벌 반대) 를 활용하여 처리 가능

$(".main-visual-swiper").mouseenter(function () {
  swiper.autoplay.stop();
});

$(".main-visual-swiper").mouseleave(function () {
  swiper.autoplay.start();
});

// 외 않되?   Uncaught ReferenceError: swiper is not defined

// rook book

let itemWidth = 0; // 각 아이템 크기 값
let dir = -1; // 흘러가는 방향
let speed = 1; // 흘러가는 속도
let loc = 1; // 위치값

let liWidth = 0; // 전체 아이템의 너비값

// 무한 랜더링을 위해 더비 미이지는 빼고 전체 리스트 너비를 구함
$(".rook-boox-wrap li").each(function () {
  console.log($(this).width());
  // w = $(this).width(); // 각 아이템의 너비값 구하기
  // liWidth += w; // 각 아이템의 너비값을 liWidth에 더하여 누적

  // console.log(liWidth);
});

// function flowBanner() {
//   // 전체 아이템 부모 ul의 위치를 조금씩 움직이게 하기 위해서 위치값 구하기
//   loc += speed * dir;

//   // 위치값이 전체 너비 보다 크면 맨 앞으로 이동
//   if (loc <= -liwidth) {
//     loc = 0;
//   }
//   // 위치값이 0이면 맨 마지막으로 이동
//   else if (loc >= 0) {
//     loc = -liWidth;
//   }

//   $(".look-book-wrap").css({ left: loc });
// }

// setInterval(flowBanner, 10);

// $(".look-book").mouseenter(function () {
//   speed = 0;
// });

// $(".look-book").mouseleave(function () {
//   speed = 1;
// });

// $("span.prev").mouseenter(function () {
//   speed = 5;
//   dir = 1;
// });

// $("span.next").mouseenter(function () {
//   speed = 5;
//   dir = -1;
// });

//  // rook book

// fancy box
Fancybox.bind("[data-fancybox]", {
  // your coustom option
});

document.getElementById("trigger").addEventListener("click", () => {
  Fancybox.show([
    {
      src: "https://www.google.com/maps/@51.5039653,-0.1246493,14.12z",
      width: 800,
      height: 600,
    },
  ]);
});
// // fancy box
