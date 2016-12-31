describe("Card", function() {
  
  it("After Call Card Template, the container should contain the Card.", function() {
    window.test = true;
    
    var bodyObject = $('body');

    // create div container
    var containerElement = document.createElement("div");
    var containerObject = $(containerElement);
    containerObject.css('display', 'none');

    // add container to body
    bodyObject.prepend( containerObject );

    // create card
    callCardTemplate( containerObject );
    var cards = containerObject.find('.card');

    // test
    expect(cards.length > 0).toBe(true);
  });

});
