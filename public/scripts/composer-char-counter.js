(function ($) {
  $(document).ready(function () {
    // Counter characters left
    $("#tweet-text").on("input", function () {
      const maxLength = $(this).attr("maxLength");
      const currLength = $(this).val().length;
      const charsLeft = Number(maxLength - currLength);

      $(".charLeft").html(charsLeft);
    });
  });
})(jQuery);
