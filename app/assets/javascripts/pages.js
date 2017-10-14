$(document).ready(function(){
	// stop the carousel from pausing when mouse hovers over the images
	$('.carousel').carousel({
	    pause: "false"
	});

	if($('.children').length) { 
    function switch_pics() {
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

	if($('.woven-1').length) { 
    function switch_pics() {
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

	if($('.fabrics-textiles-1').length) { 
    function switch_pics() {
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

	if($('.uniforms-1').length) { 
    function switch_pics() {
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
