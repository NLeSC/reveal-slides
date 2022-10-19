## Reveal.js with Vite

Minimal reveal.js scaffolding using vite.

Using the reveal.js API rather than a clone of the reveal.js repo (which is
their recommended installation, but not my preferred one).

Inspired by https://glebbahmutov.com/blog/reveal-vite/

## To use
```
git clone ...
cd reveal-vite
yarn

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
