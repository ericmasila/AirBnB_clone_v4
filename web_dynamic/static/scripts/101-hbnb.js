$(document).ready(function () {
  $("#toggle-reviews").click(function () {
    if ($(this).text() === "show") {
      // Fetch, parse, and display reviews
      $(this).text("hide");
      // Example: Fetching reviews from server and displaying them
      $("#reviews-list").html("<p>Review 1</p><p>Review 2</p><p>Review 3</p>");
    } else {
      // If the text is 'hide', remove all Review elements from the DOM
      $(this).text("show");
      $("#reviews-list").empty();
    }
  });
});
