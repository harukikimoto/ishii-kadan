
jQuery(function(){
    //予約モーダル
    $(".reserve").click(function(){
        $('.reserve-detail').fadeIn(800);
    });

    $(".reserve-close").click(function(){
        $('.reserve-detail').fadeOut(800);
    });


    //flatpickr
    flatpickr('#js-datepicker', {
        locale     : 'ja',
        dateFormat : 'Y.m.d（D）', 
        mode: "multiple",
        minDate: new Date()
    });


    // ハンバーガメニュー
    $(".nav-toggle").click(function(){  
        if(window.matchMedia("(max-width: 960px)").matches) {
            $(this).toggleClass("open");
            $(".header-nav").fadeToggle(800);
            $(".nav-contents-ttl").fadeToggle(800);
            $(".nav-information").fadeToggle(800);
        }    
    });

    //ふわっと表示
    AOS.init({
        duration: 1200,
        once: true
    });

    //スライドショー
    const swiper = new Swiper(".swiper", {
        loop: true,
        effect: "fade", // フェード切り替え
        // 自動再生
        autoplay: {
          delay: 6000, // 6秒後に次のスライドへ
          disableOnInteraction: false, // ユーザーが操作しても自動再生を継続
        },
        speed: 3000// 3秒かけてフェード
    });


    //ヘッダースライド
    $(window).on('load scroll', function() {
        var scroll = $(window).scrollTop(); 
        
        if(scroll >= 100){
            $('.header-fixed').removeClass('SlideOut');
            $('.header-fixed').addClass('SlideIn');
        }else{
            if($('.header-fixed').hasClass('SlideIn')){
                $('.header-fixed').removeClass('SlideIn');
                $('.header-fixed').addClass('SlideOut');
            }
        }
    });



    //タブ
    // ①タブをクリックしたら発動
    $('.news-select p').click(function() {
        // ②クリックされたタブの順番を変数に格納
    var index = $('.news-select p').index(this);
        // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.news-select p').removeClass('active');
        // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');
        // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.news-inner ul').removeClass('show').eq(index).addClass('show');
    });

});
