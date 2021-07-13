(function ($) {
  $(document).ready(function () {
    $("#form")
      .find("#tweet-text")
      .on("input", function () {
        const maxLength = $(this).attr("maxLength");
        const currLength = $(this).val().length;
        const charsLeft = Number(maxLength - currLength);

        $("#form").find(".charLeft").html(charsLeft);
      });
  });
})(jQuery);
