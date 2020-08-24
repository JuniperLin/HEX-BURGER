$(document).ready(function () {
  $(".hamburger-btn").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(".nav-menu").toggleClass("active");
    $(".banner-inner").toggleClass("active");
  });
  $("#sign-up-btn").click(function (e) {
    e.preventDefault();
    $(".all-container").addClass("sign-up-mode");
    $("#sign-in-btn").removeClass("sign-up-mode");
  });
  $("#sign-in-btn").click(function (e) {
    e.preventDefault();
    $(".all-container").removeClass("sign-up-mode");
    $("#sign-up-btn").addClass("sign-up-mode");
  });
});
