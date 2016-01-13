// Create temp html element to add the output

$(' .notify .container').append('<div id=scr_pr></div>');
var $scr_out = $('#scr_pr');
	

// Usage:
// empty($scr_out);
function empty($el) {
	$el.empty();
}


// Get the names of the projects and put them in the above element
$('#table-items-total tr').each(function(i) {
	// console.log(i, $(this).find('td:eq(1)').html())
	var $proj_name_td = $(this).find('td:eq(1)');
	var proj_name = '';
	if($proj_name_td.children('span').length > 0) {
		proj_name = $proj_name_td.find('span span').attr('data-content');
	}
	else {
		proj_name = $proj_name_td.html();
	}
	console.log(proj_name)
	// The change of line is usefull to paste the names in excel column aftrewards 
	$scr_out.append(proj_name + '<br>');
});


// Get the end dates of the projects and put them in the above element
$('#table-items-total tr').each(function(i) {
	// console.log(i, $(this).find('td:eq(1)').html())
	var $date_end_td = $(this).find('td:eq(-2)');
	var date = $date_end_td.html();
	console.log(date)
	// The change of line is usefull to paste the names in excel column aftrewards 
	$scr_out.append(date + '<br>');
});