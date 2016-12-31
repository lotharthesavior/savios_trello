

/**
 * Build the template
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @param Object container
 */
function callCardTemplate( container ){
	
	var template = _.template(
		"<div class='card'>"
		+ "<h1>Card</h1>"
		+ "<div class='card-container'>Content...</div>"
		+ "</div>"
    );

	container.append( template({}) );

}