/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

(function ($) {
  $(document).ready(function () {
    //

    const renderTweets = (tweets) => {
      for (const tweet of tweets) {
        const $tweetCard = createTweetElement(tweet);
        $(".tweet-container").append($tweetCard);
      }
    };

    const createTweetElement = (tweetObj) => {
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
          <p>${tweetObj.content.text}</p>
        </div>
        <footer class="tweet-footer">
          <p>10 days ago</p>
          <!-- <time class="timeago" datetime="2019-11-27T09:24:17Z"
          >November 27, 2019</time
        > -->
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

    // DATABASE

    const tweetDB = [
      {
        user: {
          name: "Newton",
          avatars: "https://i.imgur.com/73hZDYK.png",
          handle: "@SirIsaac"
        },
        content: {
          text: "If I have seen further it is by standing on the shoulders of giants"
        },
        created_at: 1625954859205
      },
      {
        user: {
          name: "Descartes",
          avatars: "https://i.imgur.com/nlhLi3I.png",
          handle: "@rd"
        },
        content: {
          text: "Je pense , donc je suis"
        },
        created_at: 1626041259205
      }
    ];

    // submit event
    $("#form").submit((e) => {
      e.preventDefault();

      const tweet = $("textarea").val();
      const data = $(e.target).serialize();
      // console.log(form.serialize());
      // console.log($(this));
      // console.log(tweet);
      $.ajax({
        url: e.target.action,
        type: "POST",
        data,
        success: (response) => console.log(response)
      });
    });

    renderTweets(tweetDB);
  });
})(jQuery);
