 $(document).ready(function() {
    var NavTop = $('.nav').offset().top;
    var Nav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > NavTop) { 
        $('.nav').addClass('nav-effected');
        $('.nav-item').addClass('nav-item-effected')
        $('.nav-item').removeClass('text-white')
        $('.brand').addClass('brand-animate')
        } else {
        $('.nav').removeClass('nav-effected'); 
        $('.nav-item').removeClass('nav-item-effected')
        $('.nav-item').addClass('text-white')
        $('.brand').removeClass('brand-animate')
        }
    };

    Nav();

    $(window).scroll(function() {
        Nav();
    });
    });