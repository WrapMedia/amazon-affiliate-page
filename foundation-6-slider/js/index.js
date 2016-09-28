$(document).ready(function() {
  checkTopBar();
  $(window).resize(checkTopBar);
  $(document).foundation();
});

$("#slider").on('moved.zf.slider', function() {
  console.log("slider moved! value:", $(".slider-handle").attr("aria-valuenow"));
});

function checkTopBar() {
  if ($(".title-bar-left").css("display") == "none") {
    console.log("title-bar-left hidden.");
    $("#offCanvasLeft").css("top", $(".title-bar").css("height"));
    $("#offCanvasLeft").css("height", (window.innerHeight - parseInt($(".title-bar").css("height"))));
  }
};