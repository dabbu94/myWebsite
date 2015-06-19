
$(document).ready(function(){

  $('.title').hide();
  $('.title').fadeIn(1500);
  $("#t_whoami").hide();
  $('.scrollspy').scrollSpy();
  
  $(document).scroll(function () {
    if ($("#whoami").scrollTop() == 0) {
        $('#t_whoami').fadeIn(1500);
    }
});


 
});

