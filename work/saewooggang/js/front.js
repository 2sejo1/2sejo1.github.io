$(document).ready(function () {
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

      console.log(count);
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
  // document
  //   .querySelectorAll(".content-box .btn-list a")
  //   .forEach(function (element) {
  //     element.addEventListener("mouseenter", function () {
  //       let getSrc = this.children[0].src;
  //       let newSrc = getSrc.replace("Off.png", "On.png");
  //       getSrc = newSrc;
  //     });
  //   });
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

  // // side btn img: on-off
});
