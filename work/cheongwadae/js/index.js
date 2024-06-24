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

document.addEventListener("DOMContentLoaded", function () {
  // header.html을 로드하여 header 요소에 삽입
  fetch("./html/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("header").innerHTML = data;
      // css
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "./css/header.css";
      document.head.appendChild(css);
      // header.js 스크립트 파일도 로드
      const script = document.createElement("script");
      script.src = "./js/header.js";
      document.body.appendChild(script);
    })
    .catch((error) => console.error("Error loading header:", error));

  // footer.html을 로드하여 footer 요소에 삽입
  fetch("./html/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.querySelector("footer").innerHTML = data;

      //css
      // css
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "./css/footer.css";
      document.head.appendChild(css);
    })

    .catch((error) => console.error("Error loading footer:", error));
});
