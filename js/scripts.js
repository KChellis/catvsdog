$(function() {

  $("button#meow").click(function(){
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Growl!</li>");
    $("li").click(function(){
      $(this).remove();
    });
  });

  $("button#woof").click(function(){
    $("ul#cat").prepend("<li>Hiss!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
    $("li").click(function(){
      $(this).remove();
    });
  });

  $("button#showc").click(function(){
    $("ul#cat").before("<img src='img/cat.jpg' alt='picture of cat'>");
    $("img").click(function(){
      $(this).remove();
    });
  });

  $("button#showd").click(function(){
    $("ul#dog").before("<img src='img/dog.jpg' alt='picture of dog'>");
    $("img").click(function(){
      $(this).remove();
    });
  });

});
