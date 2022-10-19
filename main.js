import 'reveal.js/dist/reveal.css'
import './reveal-nlesc.scss'
import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';

const deck = new Reveal()
deck.initialize({
  hash: true,
  controls: true,
  progress: true,
  center: true,
  hash: true,
  transition: 'slide', // none/fade/slide/convex/concave/zoom
  // menu: { // Menu works best with font-awesome installed: sudo apt-get install fonts-font-awesome
  //   themes: false,
  //   transitions: false,
  //   markers: true,
  //   hideMissingTitles: true,
  // },
  // dependencies: [
  //   {src: 'reveal.js/4.3.1/reveal.js-plugins/reveal.js-d3/reveald3.js'}
  // ],
  plugins: [ Highlight, Markdown, Math.KaTeX, Notes, Search, Zoom ],  // Menu from separate reveal.js plugins
})
