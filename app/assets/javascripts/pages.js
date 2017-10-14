$(document).ready(function(){
	// stop the carousel from pausing when mouse hovers over the images
	$('.carousel').carousel({
	    pause: "false"
	});

	if($('.children').length) { 
    console.log("in");
    function switch_pics() {
      console.log('im in the function');
      if($('.children').css('display') == 'block') {
        $('.children').hide();
        $('.ladies').fadeIn(1500);
      } else if($('.ladies').css('display') == 'block') {
        $('.ladies').hide();
        $('.mens').fadeIn(1500);
      } else {
        $('.mens').hide();
        $('.children').fadeIn(1500);
      }
    }
    setInterval(switch_pics, 4000); 
  }

});