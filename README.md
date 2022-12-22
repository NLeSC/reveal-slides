## Reveal.js with Vite

Minimal reveal.js scaffolding using vite.

Using the reveal.js API rather than a clone of the reveal.js repo (which is
their recommended installation, but not my preferred one).

## eScience Center styling

This template includes default styling with Netherlands
eScience Center branding. This consists of three main components:

- `reveal-nlesc.scss`: a [custom reveal.js
  theme](https://revealjs.com/themes/#creating-a-theme) which modifies some of
  the default styles. Imports further styling from the plugin described next.
- `plugin/escience/decorations.js`: a [reveal.js
  plugin](https://revealjs.com/creating-plugins/) that inserts some elements
  into the slide deck on load.
- `plugin/escience/decorations.scss`: styling for above decorations. They are
  out-of-view by default, but will respond to class changes set through the
  data-state attribute in a reveal section. These styles are imported in the
  custom theme, so they are meant to be used together.

The plugin and theme are imported in the default reveal.js entrypoint, in this
case `main.js`. If you are using reveal.js in another way, e.g. through an
`index.html` file, you can import them there.

## To use as template
Click the button "Use this template". This will create a copy of this repository
in your own github account. Give your new repo a suitable name. Subsequently,
to edit and preview:

```
git clone <your new repo>
cd reveal-vite
yarn

# Modify package.json:
# change the name field to the name you chose for your repo

# To start a development server
yarn dev

# To build for production / GH pages
yarn build
```


## To reproduce
```
# Initialize a vite project
yarn create vite reveal-vite --template vanilla

# Enter the project directory
cd reveal-vite

# Install dependencies
yarn

# Add reveal.js
yarn add reveal.js

# Add version control
git init
git add -A
git commit -m "Inital commit"

# Replace the body in index.html with reveal.js elements.
# Replace the content of main.js with its current content.
```
