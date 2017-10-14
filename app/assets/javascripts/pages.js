$(document).ready(function(){
	// stop the carousel from pausing when mouse hovers over the images
	$('.carousel').carousel({
	    pause: "false"
	});

	if($('.children').length > 0) { 
		console.log("Found the container");
    function switch_pics() {
    	console.log("In the function1!!!!");
      console.log('Outside display children: ' + $('.children').css('display'));
      if($('.children').css('display') == "block") {
      	console.log('Hiding children');
      	console.log('Display children: ' + $('.children').css('display'));
        $('.children').hide();
      	console.log('Display children after: ' + $('.children').css('display'));
        $('.ladies').fadeIn(1500);
      } else if($('.ladies').css('display') == 'block') {
      	console.log('Hiding ladies');
      	console.log('Display ladies: ' + $('.ladies').css('display'));
        $('.ladies').hide();
        $('.mens').fadeIn(1500);
      	console.log('Display ladies after: ' + $('.ladies').css('display'));
      } else {
      	console.log('Hiding mens');
      	console.log('Display mens: ' + $('.mens').css('display'));
        $('.mens').hide();
        $('.children').fadeIn(1500);
      	console.log('Display mens after: ' + $('.mens').css('display'));
      }
    }
    setInterval(switch_pics, 4000); 
  }

	if($('.woven-1').length > 0) { 
		console.log("Found the container");
    function switch_pics() {
    	console.log("In the function2!!!!");
      if($('.woven-1').css('display') == 'block') {
        $('.woven-1').hide();
        $('.woven-2').fadeIn(1500);
      } else if($('.woven-2').css('display') == 'block') {
        $('.woven-2').hide();
        $('.woven-1').fadeIn(1500);
      }
    }
    setInterval(switch_pics, 4000); 
  }

	if($('.fabrics-textiles-1').length > 0) { 
		console.log("Found the container");
    function switch_pics() {
    	console.log("In the function3!!!!");
      if($('.fabrics-textiles-1').css('display') == 'block') {
        $('.fabrics-textiles-1').hide();
        $('.fabrics-textiles-2').fadeIn(1500);
      } else if($('.fabrics-textiles-2').css('display') == 'block') {
        $('.fabrics-textiles-2').hide();
        $('.fabrics-textiles-1').fadeIn(1500);
      }
    }
    setInterval(switch_pics, 4000); 
  }

	if($('.uniforms-1').length > 0) { 
		console.log("Found the container");
    function switch_pics() {
    	console.log("In the function4!!!!");
      if($('.uniforms-1').css('display') == 'block') {
        $('.uniforms-1').hide();
        $('.uniforms-2').fadeIn(1500);
      } else if($('.uniforms-2').css('display') == 'block') {
        $('.uniforms-2').hide();
        $('.uniforms-1').fadeIn(1500);
      }
    }
    setInterval(switch_pics, 4000); 
  }

});
