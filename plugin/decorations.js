// decorations.js
//
// This plugin will insert the following decorations:
// - <div id="yellow-strip">
// - ...

// Decorations can be triggered by adding the data-state attribute to a section, e.g.
// <section data-state="yellow-strip">

export default {
    id: 'decorations',
    init: ( deck ) => {
      initDecorations(deck)

      // Update decorations on slide change event
      deck.on( 'slidechanged', event => {
      addDecorations(deck);
      });
    }
  }

function addDecorations( deck ) {
  const currentSlide = deck.getCurrentSlide();

  const yellowStrip = document.getElementById('yellow-strip')
  if ( currentSlide.getAttribute('data-state') ) {
    const data_state = currentSlide.getAttribute('data-state');
    if ( data_state.includes("yellow-strip")) {
      yellowStrip.classList.add("visible")
    }
  } else {
    yellowStrip.classList.remove("visible")
  };
};


function initDecorations( deck) {
  const viewport = deck.getViewportElement();

  const yellowStrip = document.createElement('div');
  yellowStrip.setAttribute("id", "yellow-strip");

  // Add to DOM
  viewport.appendChild(yellowStrip);
}
