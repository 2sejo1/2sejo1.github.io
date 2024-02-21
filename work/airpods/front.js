$(document).ready(function () {
  $(".product-box .arrow-btn").on("click", function () {
    $(this).parent().parent().toggleClass("on");
    $(this).toggleClass("on");
  });
});
