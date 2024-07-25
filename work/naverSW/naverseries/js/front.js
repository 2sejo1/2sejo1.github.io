$(document).ready(function () {
  document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".fixed-box").classList.toggle("on");
    document.querySelector(".main-visual-wrapper").classList.toggle("on");
  });

  //custom scroll
  $(function () {
    $("article").mCustomScrollbar({
      theme: "minimal",
    });
  });

  // XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
  // // main slide moving

  // let currentIndex = 0;

  // // show slide

  // function showSlide(index) {
  //   let slideWrapper = document.querySelector(".main-visual-wrapper");
  //   let slideWidth = document.querySelector("article").clientWidth;
  //   slideWrapper.style.transform = `translateX(${-index * slideWidth}px)`;

  //   slideWrapper.style.transition = "0.5s";
  //   currentIndex = index;
  // }
  // // //show slide

  // //  prev slide
  // function prevSlide() {
  //   currentIndex = (currentIndex - 1 + 5) % 5;
  //   showSlide(currentIndex);
  // }
  // // // prev slide

  // //  next slide
  // function nextSlide() {
  //   currentIndex = (currentIndex + 1) % 5;

  //   showSlide(currentIndex);
  // }
  // // // next slide

  // // btn moving
  // document.querySelector(".btn-prev").addEventListener("click", function () {
  //   prevSlide();
  //   console.log(currentIndex);
  // });
  // document.querySelector(".btn-next").addEventListener("click", function () {
  //   nextSlide();
  //   console.log(currentIndex);
  //   if (currentIndex === 0) {
  //     document.querySelector(".btn-prev").classList.remove("on");
  //   } else {
  //     document.querySelector(".btn-prev").classList.add("on");
  //   }
  // });
  // // //btn moving

  // // //main slide moving
  // // XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX

  //  O O O moving O O O
  let count = 0;
  let slideWrapper = document.querySelector(".main-visual-wrapper");
  let slideWidth = document.querySelector("article").clientWidth;

  // prev
  document.querySelector(".btn-prev").addEventListener("click", function () {
    count--;
    slideWrapper.style.transition = "0.8s";
    slideWrapper.style.transform = `translateX(${-count * slideWidth}px)`;

    if (count === 0) {
      document.querySelector(".btn-prev").classList.remove("on");
    }
  });

  // next
  document.querySelector(".btn-next").addEventListener("click", function () {
    count++;
    slideWrapper.style.transition = "0.8s";
    slideWrapper.style.transform = `translateX(${-count * slideWidth}px)`;

    if (count !== 0) {
      document.querySelector(".btn-prev").classList.add("on");
    }

    if (count === 5) {
      slideWrapper.style.transform = `translateX(${
        -count * slideWidth * 0.9
      }px)`;

      function reset() {
        count = 0;
        slideWrapper.style.transform = `translateX(${-count * slideWidth}px)`;
        document.querySelector(".btn-prev").classList.remove("on");
      }
      setTimeout(reset, 400);
    }
  });

  // // O O O moving O O O
});
