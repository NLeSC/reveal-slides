// decorations.js
//
// This plugin will insert the following decorations:
// - purple-overlay
// - blue-overlay
// - white-overlay
// - black-overlay
//
// - logo-color
// - logo-part-white
// - logo-white
// - right-e
//
// - blue-strip
// - blue-pane-right
// - blue-pane-left
// - yellow-flag
// - yellow-strip
// - yellow-half-strip
// - purple-blob
// - purple-strip-bottom
// - purple-half-circle-top
// - purple-half-circle-bottom
//
// - touch-pane
//
// Decorations can be triggered by adding the data-state attribute to a section, e.g.
// <section data-state="yellow-strip">

export default {
    id: 'decorations',
    init: ( deck ) => {
      initDecorations(deck);

      // Update decorations on slide change event
      deck.on( 'slidechanged', event => {
        updateDecorations(deck);
      });
    }
  }

function updateDecorations( deck ) {
  const currentSlide = deck.getCurrentSlide();
  var dataState = currentSlide.getAttribute('data-state') || [];
  const decorations = [
    'purple-overlay',
    'blue-overlay',
    'white-overlay',
    'black-overlay',
    'logo-color',
    'logo-part-white',
    'logo-white',
    'right-e-top',
    'right-e-bottom',
    'blue-strip',
    'blue-pane-right',
    'blue-pane-left',
    'touch-pane',
    'yellow-flag',
    'yellow-strip',
    'yellow-half-strip',
    'purple-blob',
    'purple-strip-bottom',
    'purple-half-circle-top',
    'purple-half-circle-bottom',
  ];

  // Process compound states
  const compoundStates = {
    'standard': ' logo yellow-flag white-overlay',
    "two-pane": ' logo yellow-flag white-overlay blue-pane-right',
    'about': ' logo white-overlay blue-pane-left purple-half-circle-top purple-strip-bottom yellow-half-strip',
    'touch': ' logo blue-overlay touch-pane purple-blob right-e-bottom',
  }

  for (var key in compoundStates) {
    if (dataState.includes(key)){
      dataState += compoundStates[key]
    }
  }

  // Toggle visibility of set decorations
  decorations.forEach((decoration) => {
    var el = document.getElementById(decoration);
    if (dataState.includes(decoration)) {
      el.classList.add("visible");
    } else {
      el.classList.remove("visible");
    };
  });
};

function initDecorations( deck) {
  const viewport = deck.getViewportElement();

  el = document.createElement('div');
  el.setAttribute("id", "blue-overlay");
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "purple-overlay");
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "white-overlay");
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "black-overlay");
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "blue-pane-left");
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "blue-pane-right");
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "purple-half-circle-top");
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "purple-strip-bottom");
  viewport.appendChild(el);

  var el = document.createElement('div');
  el.setAttribute("id", "yellow-strip");
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "yellow-half-strip");
  viewport.appendChild(el);

  el = document.createElement('div')
  el.setAttribute("id", "touch-pane");
  el.innerHTML = `<h1>Let's stay<br>in touch</h1>`
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "logo-color");
  el.innerHTML = `<img src="./files/logo-fc.svg">`
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "logo-part-white");
  el.innerHTML = `<img src="./files/logo-fc-part-white.svg">`
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "logo-white");
  el.innerHTML = `<img src="./files/logo-fc-white.svg">`
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "yellow-flag");
  el.innerHTML = `<img class="left-e" src="./files/e-logo.svg"></img>`;
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "purple-half-circle-bottom");
  el.innerHTML = `<img class="left-e" src="./files/logo-fc-part-white.svg"></img>`
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "purple-blob");
  el.innerHTML = `
    <div class="blob1"></div>
    <div class="blob2"></div>
    <div class="box"></div>`
  viewport.appendChild(el);

  el = document.createElement('div');
  el.setAttribute("id", "blue-strip");
  el.innerHTML = `<div id="footer"></div>`
  viewport.appendChild(el);

  el = document.createElement('img');
  el.setAttribute("id", "right-e-top");
  el.setAttribute("src", "./files/letter-e.svg");
  viewport.appendChild(el);

  el = document.createElement('img');
  el.setAttribute("id", "right-e-bottom");
  el.setAttribute("src", "./files/letter-e.svg");
  viewport.appendChild(el);
}
