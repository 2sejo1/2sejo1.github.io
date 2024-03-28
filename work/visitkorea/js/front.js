// 메뉴 열기
document.querySelector(".nav-btn").addEventListener("click", function () {
  this.classList.add("off");
  document.querySelector("nav").classList.add("on");
  document.querySelector("section").classList.add("on");

  const articles = document.querySelectorAll("article");
  let onIndex = -1;

  articles.forEach((article, index) => {
    if (article.classList.contains("on")) {
      onIndex = index;
    }
  });

  document.querySelector("#wrap").classList.add(`on${onIndex + 1}`);
});
// // 메뉴 열기

//  페이지 전환

document.querySelectorAll(".nav-list li a").forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    let idCheck = this.getAttribute("href");
    let contentID = document.getElementById(idCheck.slice(1));

    // nav close
    document.querySelector("#wrap").className = "";
    document.querySelector("nav").classList.remove("on");
    document.querySelector("section").classList.remove("on");
    document.querySelector(".nav-btn").classList.remove("off");

    // article : remove on
    document.querySelectorAll("article").forEach(function (e) {
      e.classList.remove("on");
    });
    // 클릭한 페이지 on
    contentID.classList.add("on");
  });
});

// // 페이지 전환
