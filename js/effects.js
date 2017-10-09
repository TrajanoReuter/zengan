$(document).ready(function() {
    $(window).scroll(function(){
        var scrollTops = $(window).scrollTop();
        var scrollTopHow = $('#how-works').position().top;

        if(scrollTops>= scrollTopHow - 160){
            $('header').addClass('active');
            $('nav.desk ul>li').addClass('active');
            $('img.logo').addClass('active');
            $('img.btnm').addClass('active');
            $('#menu-mobile').addClass('xs')
        }
        else{
            $('header').removeClass('active');
            $('nav.desk ul>li').removeClass('active');
            $('img.logo').removeClass('active');
            $('img.btnm').removeClass('active');
            $('#menu-mobile').removeClass('xs')
        }
    });

    $('img.btnm').on('click', function(){
        $('#menu-mobile').toggleClass('active');
    });

    var $doc = $('html, body');
            $('.scrollslow').click(function() {
                $doc.animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top - 120
            }, 750);
            return false;
    });
});
