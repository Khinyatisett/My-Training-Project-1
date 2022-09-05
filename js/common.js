$(function(){
  $(".btn").hover(function(){
    $(this).css("background-color", "black");
    $(this).css("color", "white");
  });
  
  $('.btn-gnavi').on('click',function(){
    var rightVal = 0;
    if($(this).hasClass('hb-open')){
      rightVal = -300;
      $(this).removeClass('hb-open');
    }else{
      $(this).addClass('hb-open');
    }

    $('#global-navi').stop().animate({
      right: rightVal
    }, 200);
  });
});
