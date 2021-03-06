/*
	Sliding Labels 3.2
	
	This is the official plugin version of Sliding Labels.
	It is open source code by Tim Wright of CSSKarma.com
	Use as you see fit, I'd like it if you kept this in 
	the code, but basically share it and don't be a jerk.
	
	Support:
	http://www.csskarma.com/blog/sliding-labels-plugin
	
	Version: 2 - added textarea functionality
	Version: 3 - added axis parameter
	           - added speed parameter
	           - removed color parameter, as it should be define in the CSS
	           - added position:relative to wrapping element
	           - coverted to jQuery plugin
	Version: 3.1 - changed "children" to "find" so it works a little better with UL & fieldsets
	Version: 3.2 - Added a "className" option so you don't have to use ".slider" as the wrapper
*/
(function(a){a.fn.slidinglabels=function(c,f){var d={className:"form-slider",topPosition:"5px",leftPosition:"5px",axis:"x",speed:"fast"},c=a.extend(d,c),b=this.find("."+d.className+""),e=b.find("label");return e.each(function(){obj=a(this);var j=obj.parents("."+d.className+"");j.css({position:"relative"});obj.css({position:"absolute",top:d.topPosition,left:d.leftPosition,display:"inline","z-index":99});var k=a(this).next().val(),i=a(this).width(),h=i+5+"px",g=a(this).height();if(k!==""){if(d.axis=="x"){obj.stop().animate({left:"-"+h},1)}else{if(d.axis=="y"){obj.stop().animate({top:"-"+g},1)}}}a("input, textarea").focus(function(){var m=a(this).prev("label"),o=m.width(),l=m.height(),q=o+5+"px",n=l+"px",p=a(this).val();if(p==""){if(d.axis=="x"){m.stop().animate({left:"-"+q},d.speed)}else{if(d.axis=="y"){m.stop().animate({top:"-"+n},d.speed)}}}else{if(d.axis=="x"){m.css({left:"-"+q})}else{if(d.axis=="y"){m.css({top:"-"+n})}}}}).blur(function(){var l=a(this).prev("label"),m=a(this).val();if(m==""){if(d.axis=="x"){l.stop().animate({left:d.leftPosition},d.speed)}else{if(d.axis=="y"){l.stop().animate({top:d.topPosition},d.speed)}}}})})}})(jQuery);
