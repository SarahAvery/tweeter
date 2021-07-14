(function ($) {
  $(document).ready(function () {
    // char counter
    $("#form")
      .find("#tweet-text")
      .on("input", function () {
        const maxLength = $(this).attr("maxLength");
        const currLength = $(this).val().length;
        const charsLeft = Number(maxLength - currLength);

        $("#form").find(".charLeft").html(charsLeft);
      });

    const animateTopHandler = function () {
      $("html").animate({ scrollTop: 0 }, "slow");
    };

    $("#topBtn").on("click", animateTopHandler);
  });

  $(document).scroll(function () {
    // scroll button
    const scrollPosition = $(window).scrollTop();
    if (scrollPosition > 100) {
      $("#topBtn").css("visibility", "visible");
    } else {
      $("#topBtn").css("visibility", "hidden");
    }

    // nav
    if (scrollPosition > 300) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  });
})(jQuery);
