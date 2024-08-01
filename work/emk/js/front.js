// side banner slide
let count = 0;

setInterval(() => {
  if (count < 2) {
    count++;
  } else {
    count = 0;
  }

  document.querySelector(".banner-box .slide-wrap").style.marginLeft =
    count * -100 + "%";
}, 5000);
// // side banner slide

//  frame open
// 메뉴 버튼 클릭
document.querySelectorAll(".menu-box .frame-open-btn").forEach(function (elem) {
  elem.addEventListener("click", function (e) {
    e.preventDefault();
    let href = this.getAttribute("href");
    document.querySelector(".frame").classList.add("on");
    fetchContent(href);
    window.scrollTo(0, 0);
  });
});
// // 메뉴 버튼 클릭

//  html을 frame에 불러오기
async function fetchContent(url) {
  try {
    const res = await fetch(url);
    const data = await res.text();
    document.querySelector(".frame .scene").innerHTML = data;
  } catch (error) {
    console.error("콘텐츠 로딩 중... 오류발생", error);
  }
}
// // html을 frame에 불러오기

// frame 닫기
document
  .querySelector(".frame .frame-close")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".frame").classList.remove("on");
  });
// //frame 닫기

// // frame open
