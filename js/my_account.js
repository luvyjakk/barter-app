$ ('.username_edit').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(600);
    $('html').addClass('no-scroll');
});

$ ('.close-popup').click(function() {
    $('.popup-bg').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$ ('.password_edit').click(function(e) {
    e.preventDefault();
    $('.popup-bg1').fadeIn(600);
    $('html').addClass('no-scroll');
});

$ ('.close-popup').click(function() {
    $('.popup-bg1').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$ ('.tell_edit').click(function(e) {
    e.preventDefault();
    $('.popup-bg2').fadeIn(600);
    $('html').addClass('no-scroll');
});

$ ('.close-popup').click(function() {
    $('.popup-bg2').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$ ('.email_edit').click(function(e) {
    e.preventDefault();
    $('.popup-bg3').fadeIn(600);
    $('html').addClass('no-scroll');
});

$ ('.close-popup').click(function() {
    $('.popup-bg3').fadeOut(600);
    $('html').removeClass('no-scroll');
});

$ ('.add_photo').click(function(e) {
    e.preventDefault();
    $('.popup-bg4').fadeIn(600);
    $('html').addClass('no-scroll');
});

$ ('.close-popup').click(function() {
    $('.popup-bg4').fadeOut(600);
    $('html').removeClass('no-scroll');
});