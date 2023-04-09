$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
});

$(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

});


  const scriptURL = 'https://script.google.com/macros/s/AKfycbwruuptta6QeLevTN9ps1dCUJ2X4_OdWCgYle64gF4xEcso3MUDJdyGAgtg01-8vgo/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
