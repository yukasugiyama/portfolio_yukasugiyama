$(function() {
  setTimeout(function(){
    $('.start p').fadeIn(1600);
  },500); //0.5秒後にロゴをフェードイン!
  setTimeout(function(){
    $('.start').fadeOut(500);
  },4200); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
}),




  $('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
  }),



    $(window).on('load scroll',function (){
      $('.animation').each(function(){
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var height = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - height){
          //クラスを付与
          $(this).addClass('active');
        }
      });
    });



