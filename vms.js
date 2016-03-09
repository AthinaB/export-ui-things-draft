// extract 2nd column (name), 3rd column(ex vm status) and 1st link from summary
$('#table-items-total tr').each(function(i) {
	var $name_td = $(this).find('td:eq(1)');
	var $3rd_td = $(this).find('td:eq(2)');
    var $summary_1st_link = $(this).find('td:last dl dd:first a');
	var name = '';
	if($name_td.children('span').length > 0) {
		name = $name_td.find('span span').attr('data-content');
	}
	else {
		name = $name_td.html();
	}
	 console.log(name, ' - ', $summary_1st_link.text(), ' - ', $3rd_td);
	// The change of line is usefull to paste the names in excel column aftrewards 
	$scr_out.append(escape('vm name:' + name) + ' user:' + escape($summary_1st_link.text()) + ' status: ' + $3rd_td.text() + '<br>');
});