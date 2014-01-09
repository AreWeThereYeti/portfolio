
$( document ).ready(function() {
	$('.carousel').carousel()

});


$(function(){

	$('#contact-form').slidinglabels({

		/* these are all optional */
    className    : 'slider', // the class you're wrapping the label & input with -> default = slider
		topPosition  : '7px',  // how far down you want each label to start
		leftPosition : '12px',  // how far left you want each label to start
		axis         : 'x',    // can take 'x' or 'y' for slide direction
		speed        : 'fast'  // can take 'fast', 'slow', or a numeric value

	});

});

