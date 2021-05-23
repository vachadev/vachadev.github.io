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
    var swiperA = new Swiper('.timeline .timeline-container #slider', {
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
    $('.dropdown-menu>li>a').on('click', function(event) {
        var link = $(this).attr('data-link');
        var target = $(this).attr('data-target');
        $(target).attr('href', link);
        var curr = $(this).text();
        if(curr != '') {
            $(".drop1 button").html( curr + '<span class="caret"></span>' );
        }
    });
});