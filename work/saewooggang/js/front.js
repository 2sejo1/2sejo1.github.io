$(document).ready(function () {
  //  side nav icon : on-off
  $(window).scroll(function () {
    let scrTop = $(this).scrollTop();
    // $("h5").text(scrTop);

    $("section").each(function (i) {
      let secTop = $(this).offset().top;
      // console.log(secTop);

      if (scrTop >= secTop) {
        $(".m-nav li a").removeClass("on");
        $(".m-nav li").eq(i).find("a").addClass("on");
      }
    });
  });

  // // side nav icon : on-off

  // sns - post slide (main visual sect)

  let count = 0;
  let postWrapper = document.querySelector(".post-box .post-wrapper");
  let postWidth = document.querySelector(".post-box .post").clientWidth;

  // prev
  document
    .querySelector(".post-box .btn-prev")
    .addEventListener("click", function () {
      count--;
      postWrapper.style.transform = `translateX(${-count * postWidth}px)`;

      if (count === 0) {
        document.querySelector(".post-box .btn-prev").classList.remove("on");
      }

      if (count !== 7) {
        document.querySelector(".post-box .btn-next").classList.add("on");
      }

      // console.log(count);
    });

  // next
  document
    .querySelector(".post-box .btn-next")
    .addEventListener("click", function () {
      count++;
      postWrapper.style.transform = `translateX(${-count * postWidth}px)`;

      if (count !== 0) {
        document.querySelector(".post-box .btn-prev").classList.add("on");
      }

      if (count === 7) {
        document.querySelector(".post-box .btn-next").classList.remove("on");
      }
    });

  // // sns - post slide (main visual sect)

  // side btn img: on-off
  document
    .querySelectorAll(".content-box .btn-list a")
    .forEach(function (element) {
      let getSrc = element.children[0].src;

      element.addEventListener("mouseenter", function () {
        let newSrc = getSrc.replace("Off.png", "On.png");
        element.children[0].src = newSrc;
      });
      element.addEventListener("mouseleave", function () {
        let newSrc = getSrc.replace("On.png", "Off.png");
        element.children[0].src = newSrc;
      });
    });

  // 이하 동일 동작 코드

  // function toggleImg(imgElem, hover, leave) {
  //   let changImg = $(imgElem).attr("src").replace(hover, leave);
  //   console.log(changImg);
  //   $(imgElem).attr("src", changImg);
  // }
  // $(".secMenu ul li a").on({
  //   mouseenter: function () {
  //     let thisImg = $(this).find("img");
  //     console.log(thisImg);
  //     toggleImg($(thisImg), "Off", "On");
  //   },
  //   mouseleave: function () {
  //     let thisImg = $(this).find("img");
  //     console.log(thisImg);
  //     toggleImg($(thisImg), "On", "Off");
  //   },
  // });

  // // side btn img: on-off

  //  side btn click : content open
  // document.querySelectorAll(".content-list .content").forEach(function (e) {
  //   let contentH = e.clientHeight;
  //   console.log(contentH);
  // });

  document
    .querySelectorAll(".content-box .btn-list li a")
    .forEach(function (element) {
      element.addEventListener("click", function (e) {
        e.preventDefault();
        let contentID = this.getAttribute("href");
        let contentElement = document.getElementById(contentID.slice(1));
        let contentH = contentElement.clientHeight;

        contentElement.parentElement.style.maxHeight = contentH + 60 + "px";
      });
    });

  // // side btn click : content open

  // close btn : focus
  // document.querySelectorAll(".close-btn").forEach(function (element) {
  //   element.focus();
  // });

  // //close btn : focus

  //  close btn click : content close
  document.querySelectorAll(".content-list").forEach(function (element) {
    element.addEventListener("click", function (e) {
      // console.log(e.target);
      if (e.target.classList.contains("close-btn")) {
        // close-btn을 클릭했을 때만 처리 (이벤트 위임) / contains = 해당 요소가 속해있는가?
        var closestLi = e.target.closest("li");
        // 현재 close-btn이 속한 가장 가까운 li 요소 찾기
        if (closestLi) {
          // 가장 가까운 li 요소가 있으면 해당 li 요소의 max-height를 0으로 설정
          closestLi.style.maxHeight = "0";
        }
      }
    });
  });

  // // close btn click : content close

  //  새우깡 fixed img : moving

  // jquery 코드
  // $(window).scroll(function () {
  //   let scrTop = $(this).scrollTop();
  //   // console.log(scrTop);
  //   if (scrTop > 200) {
  //     $(".fixed-img").stop().css({ opacity: "1" });
  //   } else {
  //     $(".fixed-img").stop().css({ opacity: "0" });
  //   }
  // });

  // 동일 동작 js 코드
  window.addEventListener("scroll", function () {
    //스크롤 시 fixed img의 opacity 0 > 1
    let scrTop = window.scrollY;
    let fixedImg = document.querySelector(".fixed-img");
    if (scrTop > 300) {
      // document.querySelector(".fixed-img").style.opacity = 1;
      fixedImg.classList.add("op");
    } else {
      // document.querySelector(".fixed-img").style.opacity = 0;
      fixedImg.classList.remove("op");
      fixedImg.classList.remove("on");
    }
  });

  // document.addEventListener("scroll", function () {
  //   // content open : move left
  //   let fixedImg = document.querySelector(".fixed-img");
  //   let contents = document.querySelectorAll(".content");

  //   contents.forEach(function (content) {
  //     let contentLi = content.closest("li");
  //     let liMaxH = window.getComputedStyle(contentLi).maxHeight;
  //     let fixedImgRect = fixedImg.getBoundingClientRect();
  //     let contentRect = contentLi.getBoundingClientRect();

  //     if (
  //       fixedImgRect.bottom > contentRect.top &&
  //       fixedImgRect.top < contentRect.bottom
  //     ) {
  //       if (liMaxH !== "0px") {
  //         fixedImg.style.transform = "translate(30px, -50%)";
  //         fixedImg.style.left = 0;
  //         fixedImg.style.opacity = 0.5;
  //       } else {
  //         fixedImg.style.transform = "translate(-50%, -50%)";
  //         fixedImg.style.left = "50%";
  //         fixedImg.style.opacity = 1;
  //       }
  //     } else {
  //       fixedImg.style.transform = "translate(-50%, -50%)";
  //       fixedImg.style.left = "50%";
  //       fixedImg.style.opacity = 1;
  //     }
  //   });

  //   // let fixedImg = document.querySelector(".fixed-img");
  //   // let contentLi = document.querySelector(".content").closest("li");
  //   // let liMaxH = window.getComputedStyle(contentLi).maxHeight;
  //   // let fixedImgRect = fixedImg.getBoundingClientRect();
  //   // let contentRect = contentLi.getBoundingClientRect();

  //   // if (
  //   //   fixedImgRect.bottom > contentRect.top &&
  //   //   fixedImgRect.top < contentRect.bottom
  //   // ) {
  //   //   if (liMaxH !== "0px") {
  //   //     fixedImg.style.transform = "translate(30px, -50%)"; // 수정: translate 함수에 올바른 값을 설정하여 요소를 움직임
  //   //     fixedImg.style.left = 0;
  //   //     fixedImg.style.opacity = 0.5;
  //   //   } else {
  //   //     fixedImg.style.transform = "translate(-50%, -50%)"; // 수정: translate 함수에 올바른 값을 설정하여 요소를 움직임
  //   //     fixedImg.style.left = "50%";
  //   //     fixedImg.style.opacity = 1;
  //   //   }
  //   // } else {
  //   //   fixedImg.style.transform = "translate(-50%, -50%)"; // 수정: translate 함수에 올바른 값을 설정하여 요소를 움직임
  //   //   fixedImg.style.left = "50%";
  //   //   fixedImg.style.opacity = 1;
  //   // }
  // });

  document.addEventListener("scroll", function () {
    // 스크롤 시 .content가 열려있으면 fixed 이미지를 왼쪽으로 밀기
    let fixedImg = document.querySelector(".fixed-img");
    let fixedImgRect = fixedImg.getBoundingClientRect();

    let contents = document.querySelectorAll(".content");

    contents.forEach(function (content) {
      let contentLi = content.closest("li");
      let liMaxH = window.getComputedStyle(contentLi).maxHeight;
      let contentRect = contentLi.getBoundingClientRect();

      if (
        fixedImgRect.bottom > contentRect.top &&
        fixedImgRect.top < contentRect.bottom
      ) {
        if (liMaxH !== "0px") {
          // fixedImg.style.transform = "translate(30px, -50%)";
          // fixedImg.style.left = 0;
          // fixedImg.style.opacity = 0;
          fixedImg.classList.add("on");
        } else {
          // fixedImg.style.transform = "translate(-50%, -50%)";
          // fixedImg.style.left = "50%";
          // fixedImg.style.opacity = 1;
          fixedImg.classList.remove("on");
        }
      }
    });
  });

  // // 새우깡 fixed img : moving

  // objGroup (moving bg) & title-box, content-box moving
  // document.addEventListener("scroll", function () {
  //   let sect = document.querySelectorAll("section");
  //   let objBG = document.querySelectorAll(".objGroup ");

  //   sect.forEach(function (section) {
  //     let sectRect = section.getBoundingClientRect();

  //     console.log(sectRect);
  //     console.log(window.innerHeight);

  //     // 만약 section이 화면에 보인다면
  //     if (sectRect.top < window.innerHeight && sectRect.bottom >= 0) {
  //       objBG.classList.add("on");
  //     } else {
  //       objBG.classList.remove("on");
  //     }
  //   });
  // });
  document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll("section");

    sections.forEach(function (section) {
      let sectRect = section.getBoundingClientRect();
      let objBG = section.querySelector(".objGroup");
      let titleBox = section.querySelector(".title-box");
      let contentBox = section.querySelector(".content-box");

      // 오류 방지
      if (objBG) {
        if (sectRect.top + 600 < window.innerHeight && sectRect.bottom >= 0) {
          // section이 화면에 보이면
          objBG.classList.add("on");
          titleBox.classList.add("on");
          contentBox.classList.add("on");
        } else {
          // section이 화면에 안 보이면
          objBG.classList.remove("on");
          titleBox.classList.remove("on");
          contentBox.classList.remove("on");
        }
      }
    });
  });

  // //objGroup (moving bg) & title-box, content-box moving

  //  tab mn : post on-off

  document.querySelectorAll(".content").forEach(function (element) {
    element.addEventListener("click", function (e) {
      e.preventDefault();
      // console.log(e.target);
      if (e.target.classList.contains("tab")) {
        let closestLi = e.target.closest("li");
        document.querySelector("li.on").classList.remove("on");
        if (closestLi) {
          closestLi.classList.add("on");
        }
      }
    });
  });

  // 버튼 눌러 < e.target 써서 이벤트 위임으로 처리
  // tab-box에 붙은 class 'on' 지워
  // 누른 버튼의 href 읽어
  // 그 href에 써진 아이디를 가진 tab-box 찾아
  // 그 tab 박스에 class 'on' 붙여
  // 그리고 그 tab box의 높이값 구해
  // 구한 높이값을 tab-wrap에 적용해

  document.querySelectorAll(".content-list").forEach(function (element) {
    element.addEventListener("click", function (e) {
      // console.log(e.target);
      if (e.target.classList.contains("close-btn")) {
        // close-btn을 클릭했을 때만 처리 (이벤트 위임) / contains = 해당 요소가 속해있는가?
        var closestLi = e.target.closest("li");
        // 현재 close-btn이 속한 가장 가까운 li 요소 찾기
        if (closestLi) {
          // 가장 가까운 li 요소가 있으면 해당 li 요소의 max-height를 0으로 설정
          closestLi.style.maxHeight = "0";
        }
      }
    });
  });

  // // tab mn : post on-off
});
