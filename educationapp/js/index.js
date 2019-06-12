$(document).ready(function() {
    var $cards = $('.card');
        $menuItems = $('.menu-item');

    $cards.on('click', function() {
        $(this).toggleClass('active');
    });

    $menuItems.on('click', function() {
        $menuItems.each(function() {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
});