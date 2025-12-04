// Put this at the top of script.js in the Glitch project
(function(){
  // Only run on the old Glitch hostname
  if (location.hostname.includes('glitch.me') || location.hostname.includes('glitchapp.io')) {
    // preserve pathname (e.g., /1.html or /folder/3.html)
    const path = location.pathname || '/';
    // if path already points to index or root, send to repo root
    if (path === '/' || path === '/index.html') {
      location.replace('https://hrfheller-a11y.github.io/hitster/');
    } else {
      // remove leading slash to match your GitHub Pages URLs if needed
      // but github pages will accept the leading slash too, so we append path directly
      location.replace('https://hrfheller-a11y.github.io/hitster' + path);
    }
  }
})();

/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the steps in the TODO 🚧
*/
const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}


// ----- GLITCH STARTER PROJECT HELPER CODE -----

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});

app.get('/:page', (req, res) => {
  const page = req.params.page;
  res.redirect(301, `https://hrfheller-a11y.github.io/hitster/${page}`);
});
