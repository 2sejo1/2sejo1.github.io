$(document).ready(function () {
  // header 배경색
  $(window).scroll(function () {
    let scrTop = $(this).scrollTop();

    if (scrTop > 0) {
      $(".header-box").addClass("on");
    } else {
      $(".header-box").removeClass("on");
    }
  });
  // // header 배경색

  // 링크 클립보드 복사
  document
    .querySelector(".share-img img")
    .addEventListener("click", function () {
      // 복사할 주소 text 생성
      let createTxt = document.createElement("textarea");
      createTxt.id = "copyTxt";
      createTxt.style.position = "fixed";
      createTxt.innerText = "https://if.kakao.com/";
      document.body.appendChild(createTxt);
      document;

      // text 카피
      let linkCopy = document.getElementById("copyTxt");

      linkCopy.select();
      navigator.clipboard.writeText(createTxt.textContent);

      // 복사 완료 텍스트 띄우기
      document.querySelector(".copy-completion").classList.add("on");

      setTimeout(function () {
        // 생성한 임시 text 요소 삭제
        createTxt.remove();
        // 복사 완료 텍스트 없애기
        document.querySelector(".copy-completion").classList.remove("on");
      }, 2000);
    });
  // //링크 클립보드 복사
});
