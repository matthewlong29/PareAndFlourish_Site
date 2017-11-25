/********************************************************
load more posts function
********************************************************/

$(document).ready(() => {

  // call Load more posts on click
  $(".loadMore").click(loadMorePosts);
  
  // load more posts function
  function loadMorePosts() {
    let $blogContainer = $("#blogContainer");
    let nextPage = parseInt($blogContainer.attr("data-page")) + 1;
    let totalPages = parseInt($blogContainer.attr("data-totalPages"));

    $(this).addClass("loading");

    $.get("/blog/page" + nextPage, (data) => {
      let htmlData = $.parseHTML(data);
      let $articles = $(htmlData).find("article");

      $blogContainer.attr("data-page", nextPage).append($articles);

      if ($blogContainer.attr("data-totalPages") == nextPage) {
        $(".loading").remove();
      }

      $(this).removeClass("loading");
    });
  } // end load more posts function

});