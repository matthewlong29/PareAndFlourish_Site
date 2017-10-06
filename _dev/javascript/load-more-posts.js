$(document).ready(function() {

  /********************************************************
  load more posts function
  ********************************************************/

  // call Load more posts on click
  $(".loadMore").click(loadMorePosts);
  
  // load more posts function
  function loadMorePosts() {
    var _this = this;
    var $blogContainer = $("#blogContainer");
    var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
    var totalPages = parseInt($blogContainer.attr("data-totalPages"));

    $(this).addClass("loading");

    $.get("/blog/page" + nextPage, function (data) {
      var htmlData = $.parseHTML(data);
      var $articles = $(htmlData).find("article");

      $blogContainer.attr("data-page", nextPage).append($articles);

      if ($blogContainer.attr("data-totalPages") == nextPage) {
        $(".loading").remove();
      }

      $(_this).removeClass("loading");
    });
  } // end load more posts function

});