// decorations.js
//
// This plugin inserts decorations into the reveal-viewport element on load.
// Visibility of decorations is controlled through data-state attribute of a
// section element, e.g.
// <section data-state="yellow-strip">
// will toggle the yellow-strip element.
//
// Element styles are defined in reveal-nlesc.scss

export default {
    id: 'decorations',
    init: ( deck ) => {
      initDecorations(deck);
    }
  }

function initDecorations( deck) {
  const reveal = deck.getRevealElement();
  const decorations = document.createElement('div');
  decorations.setAttribute("id", "decorations");
  decorations.innerHTML = `
  <div id="overlay"></div>
  <div id="blue-pane"></div>
  <div id="purple-half-circle-top"></div>
  <div id="purple-strip-bottom"></div>
  <div id="yellow-strip"></div>
  <div id="yellow-half-strip"></div>
  <div id="touch-pane"><h1>Let's stay<br>in touch</h1></div>
  <div id="logo-color"><img src="./files/logo-fc.svg"></div>
  <div id="logo-part-white"><img src="./files/logo-fc-part-white.svg"></div>
  <div id="logo-white"><img src="./files/logo-fc-white.svg"></div>
  <div id="yellow-flag"><img class="left-e" src="./files/e-logo.svg"></img></div>
  <div id="purple-half-circle-bottom"><img class="left-e" src="./files/logo-fc-part-white.svg"></img></div>
  <div id="blue-strip"><div id="footer"></div></div>
  <img id="right-e" src="./files/letter-e.svg"></img>
  <div id="purple-blob">
    <div class="blob1"></div>
    <div class="blob2"></div>
    <div class="box"></div>
  </div>
  `;
  reveal.prepend(decorations)
}
