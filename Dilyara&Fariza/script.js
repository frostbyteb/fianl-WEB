$(document).ready(function(){

  $('#search-icon').click(function(){
    $(this).toggleClass('fa-times');
    $('#search-box').toggleClass('active');
  });

  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){

    $('#search-icon').removeClass('fa-times');
    $('#search-box').removeClass('active');

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }

  });

  // smooth scrolling 

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});


document.addEventListener('DOMContentLoaded', function() {
  const sendMessageBtn = document.querySelector('.contact .btn');

  sendMessageBtn.addEventListener('click', function(event) {
    event.preventDefault(); 

    const nameField = document.querySelector('.contact input[placeholder="name"]');
    const emailField = document.querySelector('.contact input[placeholder="email"]');
    const numberField = document.querySelector('.contact input[placeholder="number"]');
    const subjectField = document.querySelector('.contact input[placeholder="subject"]');
    const messageField = document.querySelector('.contact textarea');

    if (nameField.value && emailField.value && numberField.value && subjectField.value && messageField.value) {
      alert('Message sent successfully!');
    } else {
      alert('Please fill in all fields.'); 
    }
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const careText = document.querySelector('.home .content h3'); 

  careText.addEventListener('mouseover', function() {
      careText.textContent = 'There is hope!'; // 
  });

  careText.addEventListener('mouseout', function() {
      careText.textContent = 'There Are Shelters,'; 
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const shopNowButtons = document.querySelectorAll('.category .box a.btn'); 

  shopNowButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          alert('Adopted successfully!'); 
      });
  });
});


var button = document.getElementById('button');
var audio = document.getElementById('audio');

function clickHandler() {
    audio.play();
}

function endHandler() {
    alert('Discover your new best friend at Meowville. Browse our adorable animals available for adoption.');
}

button.addEventListener('click', clickHandler, false);

audio.addEventListener('Discover your new best friend at Meowville. Browse our adorable animals available for adoption.', endHandler, false);


document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');

  function checkScroll() {
      sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (sectionTop < windowHeight) {
              section.classList.add('visible');
          }
      });
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();
});

document.addEventListener('DOMContentLoaded', function() {
  let discount = 0;
  const addButtons = document.querySelectorAll('.product');

  addButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          discount += 5;
          alert('You have ' + discount + '% off!');
      });
  });
});