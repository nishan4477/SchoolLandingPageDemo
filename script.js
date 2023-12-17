


jQuery(document).ready(function ($) {
  $('.mobile-nav-icon').click(function(e){
   
    $('.nav-item-wrapper').toggleClass('active');
    $('.mobile-nav-icon').toggleClass('active');
  }  )

  let myDiv = document.querySelector(".navbar"); 
  let rect = myDiv.getBoundingClientRect().top;
  console.log(rect);
  $(window).scroll(function () {
    if ($(window).scrollTop() > rect) {
        console.log($(window).scrollTop());
      myDiv.classList.add("sticky");
    } else {
      myDiv.classList.remove("sticky");
    }
  })
})