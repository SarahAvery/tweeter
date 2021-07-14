(function ($) {
  $(document).ready(function () {
    const $form = $("#form");

    // char counter
    $form.find("#tweet-text").on("input", function () {
      $("#error-msg").css("display", "none");
      const maxLength = 140;
      const currLength = $(this).val().length;
      const charsLeft = Number(maxLength - currLength);

      const $charLeft = $form.find(".charLeft");
      $charLeft.html(charsLeft);

      if (currLength > maxLength) {
        $charLeft.addClass("invalid");
      } else {
        $charLeft.removeClass("invalid");
      }
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
