$(document).ready(function () {
  $('.nav a[href^="#').click(function () {
    let offset = $(".nav").innerHeight();
    let target = $(this).attr("href");
    $("html,body").animate(
      {
        scrollTop: $(target).offset().top - offset,
      },
      500
    ); //500милисекунд - время выполнения анимации
    $('.nav a[href^="#').removeClass("active");
    $(this).addClass("active");
    return false;
  });
});
