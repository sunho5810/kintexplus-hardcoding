const clickMenuBtn = (obj) => {
  obj.hasClass("open") ? obj.removeClass("open") : obj.addClass("open");
}

$(document).ready(function(){
  $(".headerWrap").load("/inc/header.html");
});