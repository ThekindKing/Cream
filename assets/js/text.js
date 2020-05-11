$(function() {
	// スタート表示
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！

	// アコーディオンメニュー

	$('.s-date').click(function () {
		if ($(".text_box:first").is(":hidden")) {
		  $(".text_box").slideDown("fast");
		} else {
		  $(".text_box").slideUp();
		}
	  });

	
});