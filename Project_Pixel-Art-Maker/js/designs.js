$(document).ready(function(){

	$('#sizePicker').submit(function() {
		return false;
	});

	$('input[type="submit"]').click(function makeGrid() {
		const height = parseInt($('#input_height').val());
		const width = parseInt($('#input_width').val());
		$('#pixel_canvas').empty();
		if (height <= 30 && width <= 30) {
			for (let i = 0; i < height; i++) {
				let gridColumns = "";
				for (let j = 0; j < width; j++) {
					gridColumns += '<td></td>';
				}
				$('#pixel_canvas').append('<tr>' + gridColumns + '</tr>');
			}
		} else {
			height = 30;
			width = 30;
		}
	});


	let colorSelected = '#000000';

	$('#colorPicker').change(function() {
		colorSelected = $('#colorPicker').val();
	});


	$('#pixel_canvas').on('click', 'td', function paintCell() {
		$(this).css('background-color', colorSelected);
	});

});
