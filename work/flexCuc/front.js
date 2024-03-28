$(document).ready(function () {
  // swiper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    mousewheel: true,
    loop: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
    },
  });

  $(".btn .story").click(function () {
    lineShow();
    mainHide();
    sect1Show();
  });

  $(".sect1-close").click(function () {
    mainShow();
    sect1Hide();
    lineHide();
  });

  $(".btn .recipe").click(function () {
    mainHide();
    sect2Show();
  });

  $(".sect2-close").click(function () {
    mainShow();
    sect2Hide();
  });

  // 메인 사라져

  function mainHide() {
    $(".video").css({ transform: "translateX(-1000px)" });
    $(".btn").animate({ bottom: "-500px" }, 500);
    $(".mainImg").animate({ "margin-left": "600px" }, 700);
  }

  // 메인 나와

  function mainShow() {
    $(".video").css({ transform: "translateX(0px)" });
    $(".btn").animate({ bottom: "-60px" }, 350);
    $(".mainImg").animate({ "margin-left": "340px" }, 350);
  }
  // 섹션1 보여줘
  function sect1Show() {
    $("#sect1").fadeIn(1000);
  }
  //섹션1 사라져
  function sect1Hide() {
    $("#sect1").fadeOut(500);
  }
  // 라인 보여줘
  function lineShow() {
    $("#sect1")
      .delay(500)
      .fadeIn(500, function () {
        $(".top").animate({ width: "100%" }, 500, function () {
          $(".right").animate({ height: "100%" }, 500, function () {
            $(".bottom").animate({ width: "100%" }, 500, function () {
              $(".left").animate({ height: "100%" }, 500, function () {
                $(".sect1-img").fadeIn();
                $(".sect1-close").show();
              });
            });
          });
        });
      });
  }
  // 라인 나가
  function lineHide() {
    $(".top").animate({ width: "0%" }, 500);
    $(".right").animate({ height: "0%" }, 500);
    $(".bottom").animate({ width: "1%" }, 500);
    $(".left").animate({ height: "1%" }, 500);
    $(".sect1-img").fadeOut(500);
    $(".sect1-close").hide();
  }
  //섹션2 보여줘
  function sect2Show() {
    $("#sect2").fadeIn(500);
    $("#sect2").animate({ height: "50vh" }, 500);
  }
  //섹션2 사라져
  function sect2Hide() {
    $("#sect2").animate({ height: "0vh" }, 500);
    $("#sect2").fadeOut(500);
  }
});
