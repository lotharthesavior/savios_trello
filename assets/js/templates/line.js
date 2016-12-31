

/**
 * Build the template
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @param Object container
 */
function callLineTemplate( container ){

	var line_name = prompt("Line Name:");

	if( line_name == null ){
		return;
	}
	
	var template = _.template(
		"<div class='line'>"
			
			+ "<h1>" + line_name + "</h1>"

			+ "<div class='line-container'></div>"

			+ "<div class='newCard' onclick='callCardTemplate($(this).prev())'>"

				+ "<i class='fa fa-plus' aria-hidden='true'></i> Card"
				
			+ "</div>"

		+ "</div>"
    );

	container.append( template({}) );

	updateBoardWidth( container.parent() );

	// makeLineDroppable( container.find('.line-container') );
	makeLineSortable( container.find('.line-container') );
}

/**
 * Update the width of the board based on the number
 * of lines it has.
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @param object board
 */
function updateBoardWidth( board ){
	var lines = board.find('.line');
	var allWidthLines = 0;
	lines.each(function(index, element){ 
		allWidthLines += parseInt($(element).css('width')); 
		allWidthLines += parseInt($(element).css('margin-left')); 
		allWidthLines += parseInt($(element).css('margin-right'));
	});
	allWidthLines += parseInt($("#newLine").css('width'));

	board.css('min-width', (allWidthLines + 25) + 'px');
}

/**
 * Make the Line Droppable
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @param object line
 */
function makeLineDroppable( line ){

	line.droppable({
		accept: ".card",
		classes: {
			"ui-droppable-active": "ui-state-active",
			"ui-droppable-hover": "ui-state-hover"
		},
		drop: function( event, ui ) {
			console.log(event);
			console.log(ui);
		}
	});

}

/**
 * Make line sortable
 * 
 * @author Savio Resende <savio@savioresende.com.br>
 * @param object line
 */
function makeLineSortable( line ){
	line.sortable({
    	revert: true
    });
}