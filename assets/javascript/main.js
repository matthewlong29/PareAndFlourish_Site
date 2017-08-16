$(document).ready(function () {

  // Makes it so that no image is draggable
  $("img").mousedown(function () {
      return false;
  });
  
  // Call loadMore function
  $(".loadMore").click(loadMorePosts);
  
  // Calculate height of banner image minus navigation on homepage
//  var navHeight = $(".nav-container").height();
//  $("#banner").css("min-height", "calc(100vh -" + navHeight + ")");
  
});
