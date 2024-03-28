$(document).ready(function () {
  // character info

  $(".chracter-info .chracter-list a").on("click", function () {
    $(".chracter-info .chracter-list a").removeClass("on");
    $(this).addClass("on");

    let findID = $(this).attr("href");

    $(".chracter-info .character-box article").removeClass("on");
    $(findID).addClass("on");
  });

  // // character info
});
