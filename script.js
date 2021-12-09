$(document).ready(function(){
  $('.linesub').click(function(){
    $('.main-header__subjects').animate({"height"  : 'toggle'}, 'slow' );
    $(".main-header__courses").css("display", "none");
    $(".main-header__future").css("display", "none");
    });

  $('.linecourse').click( function(){
    $('.main-header__courses').animate({"height"  : 'toggle'}, 'slow' );

    $(".main-header__subjects").css("display", "none");

    $(".main-header__future").css("display", "none");
  });

  $('.linefut').click( function(){
    $('.main-header__future').animate({"height"  : 'toggle'}, 'slow' );
    
    $(".main-header__subjects").css("display", "none");

    $(".main-header__courses").css("display", "none");
  });
});
