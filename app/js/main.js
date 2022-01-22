$(function() {
    $(".menu__btn").on("click", function() {
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

    $('a[href^="#"]').on("click", function(event) {
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $("html, body").animate({ scrollTop: dn }, 1000);
    });

});

let yWidgetSettings = {
    buttonColor: "#D2B57D",
    buttonPosition: "bottom right",
    buttonAutoShow: true,
    buttonText: "Онлайн запись",
    formPosition: "right",
};