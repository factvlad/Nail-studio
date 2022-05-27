$(function () {

  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });

  $(".menu__btn").on("click", function () {
    $(".menu__list").toggleClass("active");
  });

  $(".works__slider").slick({
    dots: true,
    arrows: true,
    fade: true,
    autoplay: true,
    prevArrow: "<button  type='button' class='slick-prev'><svg class='prev' alt='prev' viewBox='0 0 72 138'  xmlns='http://www.w3.org/2000/svg'><path class='path-prev' d='M70.7999 132.005L7.85494 68.985L8.29494 68.545L70.8299 5.94499C71.4223 5.32172 71.7484 4.49214 71.739 3.63235C71.7297 2.77256 71.3857 1.95026 70.7799 1.33999C70.1672 0.745495 69.3436 0.418245 68.4899 0.429993C68.0603 0.424385 67.6337 0.50365 67.2347 0.663241C66.8358 0.822831 66.4722 1.05961 66.1649 1.36L1.14494 66.46C0.832131 66.7821 0.591783 67.1673 0.44001 67.5898C0.288238 68.0124 0.228546 68.4625 0.264939 68.91C0.215486 69.3851 0.270407 69.8653 0.425862 70.317C0.581318 70.7687 0.833556 71.181 1.16494 71.525L66.2349 136.68C67.4549 137.83 69.5299 137.845 70.8399 136.58C71.4282 135.961 71.7528 135.138 71.7454 134.284C71.7379 133.431 71.3989 132.613 70.7999 132.005Z' fill='#030303'/></svg></button>",
    nextArrow: "<button  type='button' class='slick-next'><svg  class='next' alt='next'viewBox='0 0 72 138'  xmlns='http://www.w3.org/2000/svg'><path class='path-next' d='M1.20007 132.005L64.1451 68.985L63.7051 68.545L1.17006 5.94499C0.577736 5.32172 0.251617 4.49214 0.260956 3.63235C0.270287 2.77256 0.614342 1.95026 1.22006 1.33999C1.83285 0.745495 2.65637 0.418245 3.51006 0.429993C3.93974 0.424385 4.36629 0.50365 4.76526 0.663241C5.16424 0.822831 5.52778 1.05961 5.83505 1.36L70.8551 66.46C71.1679 66.7821 71.4082 67.1673 71.56 67.5898C71.7118 68.0124 71.7715 68.4625 71.7351 68.91C71.7845 69.3851 71.7296 69.8653 71.5741 70.317C71.4187 70.7687 71.1664 71.181 70.8351 71.525L5.76505 136.68C4.54506 137.83 2.47005 137.845 1.16006 136.58C0.571838 135.961 0.247169 135.138 0.254631 134.284C0.262093 133.431 0.60112 132.613 1.20007 132.005Z' fill='#030303'/></svg></button>",
  });

  $('a[href^="#"]').on("click", function (event) {
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    $("html, body").animate({ scrollTop: dn }, 1000);
  });

  $(".next").hover( function () {
    $(".path-next").toggleClass("actived");
  });
  $(".slick-prev").hover( function () {
    $(".path-prev").toggleClass("actived");
  });
});

let yWidgetSettings = {
  buttonColor: "#D2B57D",
  buttonPosition: "bottom right",
  buttonAutoShow: true,
  buttonText: "Онлайн запись",
  formPosition: "right",
};
