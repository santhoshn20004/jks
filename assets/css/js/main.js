window.addEventListener("scroll",function(){
    var header = document.querySelector("#header-section");
    header.classList.toggle("sticky", window.scrollY > 0);
})

$('i.fa-bars').on('click', function(){
    $('.nav-section ul').toggleClass('active');
    $('.fa-bars').toggleClass('active');
    $('.fa-times').toggleClass('active');
})
$('i.fa-times').on('click',function(){
    $('.nav-section ul').removeClass('active');
    $('.fa-bars').removeClass('active');
    $('.fa-times').removeClass('active');
})


//Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
    if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
    } 
    else {
        scrollTop.addClass("active");
    }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function () {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
    return false;
});
