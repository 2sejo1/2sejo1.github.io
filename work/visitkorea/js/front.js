// 메뉴 열기
document.querySelector(".nav-btn").addEventListener("click", function () {
  document.querySelector("nav").classList.add("on");
});
// // 메뉴 열기

// 메뉴 닫기
document.querySelector(".close-btn").addEventListener("click", function () {
  document.querySelector("nav").classList.remove("on");
});
// //메뉴 닫기

//  페이지 전환
// document.querySelectorAll(".nav-list li a").forEach(function (element) {
//   element.addEventListener("click", function (e) {
//     e.preventDefault();
//     let idCheck = this.getAttribute("href");
//     let contentID = document.getElementById(idCheck.slice(1));

//     document.querySelectorAll("article").forEach(function (e) {
//       e.classList.remove("on");
//     });
//     contentID.classList.add("on");
//     document.querySelector("nav").classList.remove("on");
//   });
// });
document.querySelectorAll(".nav-list li a").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    let idCheck = this.getAttribute("href");
    let contentID = document.getElementById(idCheck.slice(1));

    // 회전
    document.querySelectorAll("article .img-box div").forEach(function (e) {
      e.style.transition = "0.8s"; // transition 효과 추가
      e.style.transform = "rotateY(360deg)";
    });
    // nav close
    document.querySelector("nav").classList.remove("on");
    // article : remove on
    setTimeout(function () {
      document.querySelectorAll("article").forEach(function (e) {
        e.classList.remove("on");
      });
      // 클릭한 페이지 on
      contentID.classList.add("on");

      // 회전 초기화
      document.querySelectorAll("article .img-box div").forEach(function (e) {
        e.style.transform = "rotateY(0)"; // transform 초기화
      });
    }, 600);
  });
});

// // 페이지 전환
