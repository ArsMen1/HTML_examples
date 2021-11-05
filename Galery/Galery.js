$(document).ready(function () {
  $(".small a").click(function (e) {
    $(".big img").hide().attr("src", $(this).attr("href")).show();
    e.preventDefault();
  });

  let btn = $(".btn");

  btn.click(function () {
    $(".galery").slideToggle(500);
    if (btn.text() == "-") {
      btn.text("+");
    } else {
      btn.text("-");
    }
  });

  $(".small a img").click(function () {
    $(".small a img").fadeTo(10, 1).css({
		"border": "none"
	});
    $(this).fadeTo(500, 0.6).css({
      "border": "1px dotted red"
    });
  });
});
