describe("Line", function() {
  
  it("After Call Line Template, the container should contain the Line.", function() {
    var bodyObject = $('body');

    // create div container
    var containerElement = document.createElement("div");
    var containerObject = $(containerElement);
    containerObject.css('display', 'none');

    // add container to body
    bodyObject.prepend( containerObject );

    // create card
    callLineTemplate( containerObject );
    var lines = containerObject.find('.line');

    // test
    expect(lines.length > 0).toBe(true);
  });

});
