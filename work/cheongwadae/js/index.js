let head = "./html/header.html";
let foot = "./html/footer.html";

let header = document.querySelector("header");
let footer = document.querySelector("footer");

async function fetchContent(place, url) {
  try {
    const res = await fetch(url);
    const data = await res.text();
    place.innerHTML = data;
  } catch (error) {
    console.error("콘텐츠 로딩 중... 오류발생", error);
  }
}

fetchContent(header, head);
fetchContent(footer, foot);

// document.addEventListener("DOMContentLoaded", function () {
//   // header.html을 로드하여 header 요소에 삽입
//   fetch("./html/header.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.querySelector("header").innerHTML = data;
//       // css
//       const css = document.createElement("link");
//       css.rel = "stylesheet";
//       css.href = "./css/header.css";
//       document.head.appendChild(css);
//       // header.js 스크립트 파일도 로드
//       const script = document.createElement("script");
//       script.src = "./js/header.js";
//       document.body.appendChild(script);
//     })
//     .catch((error) => console.error("Error loading header:", error));

//   // footer.html을 로드하여 footer 요소에 삽입
//   fetch("./html/footer.html")
//     .then((response) => response.text())
//     .then((data) => {
//       document.querySelector("footer").innerHTML = data;

//       //css
//       // css
//       const css = document.createElement("link");
//       css.rel = "stylesheet";
//       css.href = "./css/footer.css";
//       document.head.appendChild(css);
//     })

//     .catch((error) => console.error("Error loading footer:", error));
// });

// main visual

let visualCount = 1;
let visualSlide = document.querySelectorAll(".main-visual-sect .slide");

applyTextAnimation(".main-visual-sect .scene1 .text-box p");

setInterval(() => {
  if (visualCount < visualSlide.length) {
    visualCount++;
  } else if ((visualCount = visualSlide.length)) {
    visualCount = 1;
  }

  let visibleSlide = ".scene" + visualCount;

  document.querySelectorAll(".main-visual-sect .slide").forEach(function (e) {
    e.classList.remove("on");
  });

  document.querySelector(visibleSlide).classList.add("on");

  let split = visibleSlide + " .text-box p";

  applyTextAnimation(split);
}, 6000);

// splitText
gsap.registerPlugin(SplitText);

function applyTextAnimation(slide) {
  gsap.set(document.querySelector(slide), {
    opacity: 1,
  });

  const split = new SplitText(document.querySelector(slide), {
    type: "chars",
  });

  gsap.from(split.chars, {
    x: 20,
    y: 0,
    opacity: 0,
    duration: 1.5,
    stagger: {
      each: 0.09,
      from: "start",
    },
  });
}

// // splitText

// //main visual

// sect2
const contentSwiper = new Swiper(".sect2 .content-swiper", {
  // 추가 옵션 설정
  slidesPerView: 1, // 한 화면에 나올 슬라이드 개수
  spaceBetween: 50, // 슬라이드 사이 간격 px
  loop: true, // 무한 반복 여부

  // Navigation arrows 좌/우 컨트롤 버튼
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// //sect2

// sect3
document.querySelectorAll(".sect3 .mn-list li").forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    document.querySelector(".sect3 .mn-list .on").classList.remove("on");
    e.classList.add("on");
  });
});
// //sect3
