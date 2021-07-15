/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// escape function to prevent cross-site scripting
function escape(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

(function ($) {
  $(document).ready(function () {
    $("#error-msg").css("display", "none");

    const renderTweets = (tweets) => {
      for (const tweet of tweets) {
        const $tweetCard = createTweetElement(tweet);
        $("#column").append($tweetCard);
      }
    };

    // tweet article
    const createTweetElement = (tweetObj) => {
      const timepast = timeago.format(tweetObj.created_at);
      const $tweet = $(` <article>
      <div class="padding-wrapper">
        <header class="tweet-header">
          <div>
            <img src="${tweetObj.user.avatars}" alt="" />
            <p>${tweetObj.user.name}</p>
          </div>
          <p class="handle">${tweetObj.user.handle}</p>
        </header>
        <div class="tweet-body">
          <p>${escape(tweetObj.content.text)}</p>
        </div>
        <footer class="tweet-footer">
          <p>${timepast}</p>
          <div class="icons">
            <i class="fas fa-flag fa-xs"></i>
            <i class="fas fa-retweet fa-xs"></i>
            <i class="fas fa-heart fa-xs"></i>
          </div>
        </footer>
      </div>
    </article>`);
      return $tweet;
    };

    // submit event

    $("#form").submit((e) => {
      e.preventDefault();
      $("#error-msg").css("display", "none");

      const tweetLength = $("textarea").val().length;
      if (tweetLength >= 1) {
        if (tweetLength > 140) {
          $("#error-msg").css("display", "block");
          $("#error-msg p").html("You can not tweet more than 140 characters");
          return false;
        }
        const data = $(e.target).serialize();

        $.ajax({
          url: e.target.action,
          type: "POST",
          data,
          success: (response) => {
            renderTweets([response]);
            $("textarea").val("");
            $(".charLeft").html("140");
          }
        });
      } else {
        $("#error-msg").css("display", "block");
        $("#error-msg p").html("You can not send an empty tweet");
        return false;
      }
    });

    // load tweets
    $(function () {
      $.ajax({
        url: "http://localhost:8080/tweets",
        type: "GET",
        success: (response) => renderTweets(response)
      });
    });
  });
})(jQuery);
