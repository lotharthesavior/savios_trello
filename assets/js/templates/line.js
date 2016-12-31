

/**
 * Build the template
 *
 * @author Savio Resende <savio@savioresende.com.br>
 * @param Object container
 */
function callLineTemplate( container ){
	
	var template = _.template(
		"<div class='line'>"
		+ "<h1>Line</h1>"
		+ "<div class='line-container'>Cards area.</div>"
		+ "</div>"
    );

	container.append( template({}) );

}