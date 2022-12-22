import 'reveal.js/dist/reveal.css'
import './reveal-nlesc.scss'
import Reveal from 'reveal.js'
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Math from 'reveal.js/plugin/math/math.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Search from 'reveal.js/plugin/search/search.esm.js';
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';
import { Reveald3 } from './plugin/reveald3.js';
import Decorations from './plugin/escience/decorations.js';

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
  plugins: [ Highlight, Markdown, Math.KaTeX, Notes, Search, Zoom, Reveald3, Decorations ],  // Menu from separate reveal.js plugins
})
