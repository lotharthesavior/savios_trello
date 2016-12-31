

/**
 * Build the template
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @param Object container
 */
function callCardTemplate( container ){

	var card_name = prompt("Card Content:");

	if( card_name == null ){
		return;
	}
	
	var template = _.template(
		"<div class='card'>"

			+ "<div class='card-container'>" + card_name + "</div>"

		+ "</div>"
    );

    var newCard = template({});

	container.append( newCard );

	makeCardDraggable( container.find('.card').last() );

}

/**
 * Turn the Card into Draggable 
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @param object card
 */
function makeCardDraggable( card ){
	card.draggable({ 
		connectToSortable: ".line-container",
		start: function() {
			$('.line-container').css({
				backgroundColor: 'blue',
				minHeight: card.css('height')
			});

		},
		stop: function() {
			$('.line-container').css({
				backgroundColor: '#ccc'
			});
		}
	});

	card.disableSelection();
	$('.line-container').disableSelection();
}