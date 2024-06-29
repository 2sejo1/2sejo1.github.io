// let head = "./html/header.html";
// let foot = "./html/footer.html";

// let header = document.querySelector("header");
// let footer = document.querySelector("footer");

// async function fetchContent(place, url) {
//   try {
//     const res = await fetch(url);
//     const data = await res.text();
//     place.innerHTML = data;
//   } catch (error) {
//     console.error("콘텐츠 로딩 중... 오류발생", error);
//   }
// }

// fetchContent(header, head);
// fetchContent(footer, foot);

//

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

//  풀 페이지 스크롤
document.querySelectorAll("section").forEach(function (section) {
  section.addEventListener("wheel", function (e) {
    let delta = e.deltaY;

    if (delta < 0) {
      // Scroll up
      let prev = section.previousElementSibling;
      if (prev && prev.tagName.toLowerCase() === "section") {
        e.preventDefault();
        window.scrollTo({
          top: prev.offsetTop,
          behavior: "smooth",
        });
      }
    } else if (delta > 0) {
      // Scroll down
      let next = section.nextElementSibling;
      if (next && next.tagName.toLowerCase() === "section") {
        e.preventDefault();
        window.scrollTo({
          top: next.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});

// // 풀 페이지 스크롤

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

// sect4

// tab menu

// document.querySelectorAll(".sect4 .contents-list li a").forEach(function (e) {
//   e.addEventListener("click", function (event) {
//     event.preventDefault();
//     document
//       .querySelectorAll(".sect4 .contents-list li a")
//       .forEach(function (elem) {
//         elem.classList.remove("on");
//       });
//     e.classList.add("on");

//     let href = e.getAttribute("href");
//     console.log(href);

//     document
//       .querySelectorAll(".sect4 .contents-wrap .content")
//       .forEach(function (e) {
//         e.classList.remove("on");
//       });
//     document.querySelector(href).classList.add("on");
//     sect4ContentOn = document.querySelector(".sect4 .contents-wrap .on");
//     sect4InnerUl = sect4ContentOn.querySelector(".inner-box > ul");
//     sect4Prev = sect4ContentOn.querySelector(".prev-btn");
//     sect4Next = sect4ContentOn.querySelector(".next-btn");
//   });
// });
// // // tab menu

// // contents slider
// let content = document.querySelectorAll(".sect4 .contents-wrap .on ul a");
// let contentLength = content.length;
// let contentLengthHalf = contentLength / 2 - 1;
// let contentsCount = 0;
// let windowWidth = window.innerWidth;

// // windowWidth 업데이트 함수
// function updateWindowWidth() {
//   windowWidth = window.innerWidth;
//   console.log(windowWidth);
// }

// // 리사이즈 이벤트 리스너 추가
// window.addEventListener("resize", updateWindowWidth);
// let sect4ContentOn = document.querySelector(".sect4 .contents-wrap .on");
// let sect4InnerUl = sect4ContentOn.querySelector(".inner-box > ul");
// let sect4Prev = sect4ContentOn.querySelector(".prev-btn");
// let sect4Next = sect4ContentOn.querySelector(".next-btn");

// sect4Prev.addEventListener("click", function () {
//   console.log("prev");
//   if (0 < contentsCount) {
//     contentsCount--;
//   } else if (contentsCount === 0) {
//     contentsCount = 0;
//   }
//   console.log(contentsCount);
//   contentSlider();
// });

// sect4Next.addEventListener("click", function () {
//   console.log("next");
//   if (windowWidth < 762) {
//     // 1개씩 넘기는 슬라이드
//     if (contentsCount < contentLength - 1) {
//       contentsCount++;
//     } else if (contentsCount === contentLength - 1) {
//       contentsCount = 0;
//     }
//     // 1개씩 넘기는 슬라이드
//   } else if (761 < windowWidth && windowWidth < 1181) {
//     // 2개씩 넘기는 슬라이드
//     if (contentsCount < contentLengthHalf) {
//       contentsCount++;
//     } else if (contentsCount === contentLengthHalf) {
//       contentsCount = 0;
//     }

//     // 2개씩 넘기는 슬라이드
//   } else if (1180 < windowWidth) {
//     contentsCount = 0;
//   }
//   console.log(contentsCount);
//   contentSlider();
// });

// function contentSlider() {
//   sect4InnerUl.style.marginLeft = contentsCount * -100 + "%";
// }

let contentsCount = 0;
let windowWidth = window.innerWidth;

function updateWindowWidth() {
  windowWidth = window.innerWidth;
  console.log(windowWidth);

  // sect4ContentOn 업데이트
  let sect4ContentOn = document.querySelector(".sect4 .contents-wrap .on");

  // content와 contentLength 업데이트
  let content = sect4ContentOn.querySelectorAll("ul a");
  let contentLength = content.length;
  let contentLengthHalf = contentLength / 2 - 1;

  // contentsCount 초기화 및 슬라이더 위치 초기화
  contentsCount = 0;
  contentSlider(sect4ContentOn, contentsCount);
}

// 리사이즈 이벤트 리스너 추가
window.addEventListener("resize", updateWindowWidth);

// 각 메뉴 클릭 이벤트 핸들러
document.querySelectorAll(".sect4 .contents-list li a").forEach(function (e) {
  e.addEventListener("click", function (event) {
    event.preventDefault();

    // 모든 메뉴에서 'on' 클래스 제거
    document
      .querySelectorAll(".sect4 .contents-list li a")
      .forEach(function (elem) {
        elem.classList.remove("on");
      });

    // 클릭된 메뉴에 'on' 클래스 추가
    e.classList.add("on");

    let href = e.getAttribute("href");
    console.log(href);

    // 모든 컨텐츠에서 'on' 클래스 제거
    document
      .querySelectorAll(".sect4 .contents-wrap .content")
      .forEach(function (elem) {
        elem.classList.remove("on");
      });

    // 클릭된 메뉴의 href 속성에 해당하는 컨텐츠에 'on' 클래스 추가
    document.querySelector(href).classList.add("on");

    // sect4ContentOn 변수 업데이트
    let sect4ContentOn = document.querySelector(".sect4 .contents-wrap .on");

    // 슬라이더 관련 변수들 업데이트
    let content = sect4ContentOn.querySelectorAll("ul a");
    let contentLength = content.length;
    let contentLengthHalf = contentLength / 2 - 1;
    contentsCount = 0; // 컨텐츠가 변경될 때마다 초기화

    // sect4InnerUl, sect4Prev, sect4Next 변수들 업데이트
    let sect4InnerUl = sect4ContentOn.querySelector(".inner-box > ul");
    let sect4Prev = sect4ContentOn.querySelector(".prev-btn");
    let sect4Next = sect4ContentOn.querySelector(".next-btn");

    // contentSlider 함수 정의
    function contentSlider() {
      sect4InnerUl.style.marginLeft = contentsCount * -100 + "%";
    }

    // 이전 버튼 클릭 이벤트 리스너 재설정
    sect4Prev.addEventListener("click", function () {
      console.log("prev");
      if (0 < contentsCount) {
        contentsCount--;
      } else if (contentsCount === 0) {
        contentsCount = 0;
      }
      console.log(contentsCount);
      contentSlider();
    });

    // 다음 버튼 클릭 이벤트 리스너 재설정
    sect4Next.addEventListener("click", function () {
      console.log("next");
      if (windowWidth < 762) {
        // 1개씩 넘기는 슬라이드
        if (contentsCount < contentLength - 1) {
          contentsCount++;
        } else if (contentsCount === contentLength - 1) {
          contentsCount = 0;
        }
      } else if (761 < windowWidth && windowWidth < 1181) {
        // 2개씩 넘기는 슬라이드
        if (contentsCount < contentLengthHalf) {
          contentsCount++;
        } else if (contentsCount === contentLengthHalf) {
          contentsCount = 0;
        }
      } else if (1180 < windowWidth) {
        contentsCount = 0;
      }
      console.log(contentsCount);
      contentSlider();
    });

    // 초기 슬라이더 위치 설정
    contentSlider();
  });
});

// 초기 sect4ContentOn에 대해 슬라이더 설정
let sect4ContentOn = document.querySelector(".sect4 .contents-wrap .on");
let sect4InnerUl = sect4ContentOn.querySelector(".inner-box > ul");
let sect4Prev = sect4ContentOn.querySelector(".prev-btn");
let sect4Next = sect4ContentOn.querySelector(".next-btn");
let content = sect4ContentOn.querySelectorAll("ul a");
let contentLength = content.length;
let contentLengthHalf = contentLength / 2 - 1;

function contentSlider() {
  sect4InnerUl.style.marginLeft = contentsCount * -100 + "%";
}

sect4Prev.addEventListener("click", function () {
  console.log("prev");
  if (0 < contentsCount) {
    contentsCount--;
  } else if (contentsCount === 0) {
    contentsCount = 0;
  }
  console.log(contentsCount);
  contentSlider();
});

sect4Next.addEventListener("click", function () {
  console.log("next");
  if (windowWidth < 762) {
    // 1개씩 넘기는 슬라이드
    if (contentsCount < contentLength - 1) {
      contentsCount++;
    } else if (contentsCount === contentLength - 1) {
      contentsCount = 0;
    }
  } else if (761 < windowWidth && windowWidth < 1181) {
    // 2개씩 넘기는 슬라이드
    if (contentsCount < contentLengthHalf) {
      contentsCount++;
    } else if (contentsCount === contentLengthHalf) {
      contentsCount = 0;
    }
  } else if (1180 < windowWidth) {
    contentsCount = 0;
  }
  console.log(contentsCount);
  contentSlider();
});

// 초기 슬라이더 위치 설정
contentSlider();

// // contents slider

// //sect4
