// INITIALIZATION!!!
// Create temp html element to add the output
$(' .notify').css('bottom', 0);
$(' .notify .container').append('<div id=scr_pr></div>');
var $scr_out = $('#scr_pr');
	

// Usage:
// empty($scr_out);
function empty($el) {
	$el.empty();
}


// get columns' names
$('.table-items th').each(function(i) {
	var text = $(this).text();
	$scr_out.append('- ' + text + '<br>');
});

// get the keys used for summary
$('.table-items tr:first-child td:last dl dt').each(function(i) {
	var text = $(this).text();
	$scr_out.append('- ' + text + '<br>');
});