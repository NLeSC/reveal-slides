<!-- .slide: data-state="blue-overlay yellow-flag yellow-strip purple-half-circle-bottom purple-blob right-e-top" data-background-video="./files/Mood video Homepage 2.mp4" data-background-video-loop data-background-video-muted="true" -->

# My Title
## Header 2
### Header 3
#### Subheader

<br>

**[Author Name](mailto:a.name@esciencecenter.nl)** | **eScience Center**



===

<!-- .slide: data-state="standard" -->

# File Structure

---

<!-- .slide: data-state="standard" -->

## New File, New Column
- A presentation consists of columns (chapters) of vertically stacked slides
  - Press ESC to see an overview of the arrangement
  - Use arrow keys to navigate
  - Press ESC again to zoom back into the presentation
- A new file (like this one) creates a new column.

---

<!-- .slide: data-state="standard" -->

## New Slide, Same Column

- Three dashes `---` surrounded by newlines separate one slide from the next.
- Three equal signs `===` surrounded by newlines create a new column within one file.

===

<!-- .slide: data-state="standard" -->

<h1>HTML and Markdown</h1>

---

<!-- .slide: data-state="standard" -->

<h2>Mix and Match</h2>
<ul>
  <li>Slides can be Markdown</li>
  <ul>
    <li>Use <code>.md</code> file ending</li>
    <li>Markdown slides can contain HTML snippets</li>
  </ul>
  <li>Slides can also be purely HTML</li>
  <ul>
    <li>Use <code>.html</code> file ending then</li>
    <li>But there is no Markdown within HTML</li>
  </ul>
</ul>

===

<!-- .slide: data-state="standard" data-background="./files/dna-3539309_1920.jpg"-->

# Backgrounds

---

<!-- .slide: data-state="standard" data-background="./files/dna-3539309_1920.jpg"-->

## Image Backgrounds

- Define full screen image backgrounds in the slide header.

---

<!-- .slide: data-state="standard" data-background-video="./files/Mood video Homepage 2.mp4" data-background-video-loop data-background-video-muted="true" -->

## Video Backgrounds

- Videos work too!
- Make sure to include the `loop` and `muted` tags

===

<!-- .slide: data-state="standard" data-background="./files/dna-3539309_1920.jpg"-->

# Overlays

---

<!-- .slide: data-state="logo-white yellow-flag blue-overlay" data-background="./files/dna-3539309_1920.jpg"-->

<h2>blue-overlay</h2>
some background images have more contrast than others ...

<!--
There is a obscure bug (?) where markdown headers get a HTML ID based on their
content string. Using keywords like "blue-overlay" steals focus and interferes
with the theme. That's why we need to use a HTML header <h2> instead of "##"
here.
-->

---

<!-- .slide: data-state="logo-white yellow-flag blue-overlay opacity-4" data-background="./files/dna-3539309_1920.jpg"-->

<h2>blue-overlay opacity-4</h2>
... so you can change any overlay opacity from 0&nbsp;(0%) to 10&nbsp;(100%) to match background, default 8&nbsp;(80%)

<!--
&nbsp; is a special HTML character "No Break SPace", it prevents "0 (0%)"
to be split in the middle. You can also use it for names, like Dr.&nbsp;Seuss.
-->

---

<!-- .slide: data-state="logo-part-white yellow-flag purple-overlay" data-background="./files/dna-3539309_1920.jpg"-->

<h2>purple-overlay</h2>

---

<!-- .slide: data-state="logo-color yellow-flag white-overlay" data-background="./files/dna-3539309_1920.jpg"-->

<h2>white-overlay</h2>

text color changes automatically

---

<!-- .slide: data-state="logo-part-white yellow-flag black-overlay" data-background="./files/dna-3539309_1920.jpg"-->

<h2>black-overlay</h2>
