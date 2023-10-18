$ ('.username_edit').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(600);
  
});

$ ('.close-popup').click(function() {
    $('.popup-bg').fadeOut(600);
   
});

$ ('.password_edit').click(function(e) {
    e.preventDefault();
    $('.popup-bg1').fadeIn(600);
    
});

$ ('.close-popup').click(function() {
    $('.popup-bg1').fadeOut(600);
   
});

$ ('.tell_edit').click(function(e) {
    e.preventDefault();
    $('.popup-bg2').fadeIn(600);
   
});

$ ('.close-popup').click(function() {
    $('.popup-bg2').fadeOut(600);
    
});

$ ('.email_edit').click(function(e) {
    e.preventDefault();
    $('.popup-bg3').fadeIn(600);
   
});

$ ('.close-popup').click(function() {
    $('.popup-bg3').fadeOut(600);
   
});

$ ('.add_photo').click(function(e) {
    e.preventDefault();
    $('.popup-bg4').fadeIn(600);
    
});

$ ('.close-popup').click(function() {
    $('.popup-bg4').fadeOut(600);
    
});

const image1 = document.querySelector(".photo-acc");
const input1 = document.querySelector("input");

input1.addEventListener('change', (e) => {
    image1.src = URL.createObjectURL(e.target.files[0]);
});