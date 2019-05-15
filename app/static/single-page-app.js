$(function() {
  ScrollReveal({ reset: true });
  ScrollReveal().reveal('.scroll');

  ScrollReveal().reveal('.scroll-delay', { delay: 350 });
  ScrollReveal().reveal('.scroll-delay-plus', { delay: 800 });

  $(window).on('scroll', function(){
    myFunction();
  });

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }
});
