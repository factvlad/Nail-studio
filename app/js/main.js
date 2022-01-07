$(function () {
  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("active");
  });

  $(".works__slider").slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    prevArrow: "<img src='images/prewArrow.svg' class='prev' alt='prev'>",
    nextArrow: "<img src='images/nextArrow.svg' class='next' alt='next'>",
  });

  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $("html, body").animate({ scrollTop: dn }, 1000);
  });

  $(document).ready(function () {
    var button = $("#button-up");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });
    button.on("click", function () {
      $("body, html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });
});
let yWidgetSettings = {
  buttonColor: "#D2B57D",
  buttonPosition: "bottom right",
  buttonAutoShow: true,
  buttonText: "Онлайн запись",
  formPosition: "right",
};
