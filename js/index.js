console.log ("Your index.js file is loaded correctly!")

$("li").hover(function(){
    $(this).css("background-color", "#6a8d92");
    }, function(){
    $(this).css("background-color", "white");
  });

  $("button").hover(function(){
    $(this).css("background-color", "#A8036C");
    }, function () {
    $(this).css("background-color", "#373738");
  });