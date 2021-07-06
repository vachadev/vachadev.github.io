$(document).ready(function(){
    function checkHomeMenu() {
        var menuTop = $('.headstart').height();
        if($(window).scrollTop()>=menuTop){
            $('.headstart').addClass('scrolled');
        }
        else {
            $('.headstart').removeClass('scrolled');
        }
    }
    checkHomeMenu();
    $(window).scroll(function(){
        checkHomeMenu();
    });
    $(".hamburger, .avoid").on('click',function(){
        if($(window).width()<992){
            setTimeout(function(){
                $('.menulist').slideToggle(300);
                $('body').toggleClass('opened');
            },0);
        }
    });
    $(".header-stopper").on('click',function(){
        if($(window).width()<992){
            setTimeout(function(){
                $('.menulist').slideToggle(300);
                $('body').toggleClass('opened');
            },0);
        }
    });
    $(".header ul li a").on('click',function(){
        console.log('a');
        if($(window).width()<992){
            setTimeout(function(){
                $('.menulist').slideToggle(300);
                $('body').toggleClass('opened');
            },0);
        }
    });
    $(".read-more").on('click',function(){
        const container = $(this).data('target');
        $(this).toggleClass('active');
        $(container).toggleClass('active');
    });
    $(".tab-content .left-icon .glyphicon, .tab-content .right-icon .glyphicon").on('click', function() {
        const target = $(this).data('target');
        $(target).toggleClass('active').toggleClass('in');
        const curr_index = $(target).index() + 1
        $('#domain' + curr_index).addClass('active');

        const parent = $(this).data('parent');
        $(parent).toggleClass('active').toggleClass('in');
        const next_index = $(parent).index() + 1
        $('#domain' + next_index).removeClass('active');
    });
    $(".domain .image-container").on('click',function(){
        if($(window).width()<768){
            const target = $(this).data('target');
            $(target).addClass('active').addClass('in');
            const hide = $(this).data('hide');
            $(hide).removeClass('active').removeClass('in');
            $('html, body').animate({
                scrollTop: $(target).offset().top - 15
            }, 2000);
        }
    });
    if($('.donate .donate-container #slider').length) {
        var homePageSlider = new Swiper('.donate .donate-container #slider', {
            slidesPerView: 1,
            spaceBetween: 15,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: '.swiper-pagination',
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            }
        });
    }
    if($('.timeline .timeline-container #slider').length) {
        var aboutPageSlider = new Swiper('.timeline .timeline-container #slider', {
            slidesPerView: 1,
            spaceBetween: 15,
            grabCursor: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: '.swiper-pagination',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            }
        });
    }
    $('.dropdown-menu>li>a').on('click', function(event) {
        var link = $(this).attr('data-link');
        var target = $(this).attr('data-target');
        var button = $(this).attr('data-but');
        $(target).attr('href', link);
        var curr = $(this).text();
        if(curr != '') {
            $(button).html( curr + '<span class="caret"></span>' );
        }
    });
    $('#page-selection li').click(function(){
        newpage = $(this).attr('class');
        curr = newpage.substr(-1);
        console.log(curr);
        if(newpage=='first') {
            curr = 1;
        }
        if(newpage=='last') {
            curr = total;
        }
        $('.singentry').addClass('hidden');
        $('.singentry.page'+curr).removeClass('hidden');
        $('.singpage').removeClass('active');
        $('.singpage.paged'+curr).addClass('active');
        $('html, body').animate({
          scrollTop: $('#content').position().top - 50
        }, 0);
    });
});