$(document).ready(function() {
  $('#image-wrap').on('click', function(e) {
    e.preventDefault();
    console.log('yo')
    $('#hero-wrap').removeClass('hide');
  });
});