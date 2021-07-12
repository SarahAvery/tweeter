/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

(function ($) {
  $(document).ready(function () {
    // Counter characters left
    jQuery("time.timeago").format(new Date());
  });
})(jQuery);
