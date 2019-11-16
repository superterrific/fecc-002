let theButton = document.getElementById('switch');

function switchIt() {
  if (theButton.getAttribute("aria-pressed") == "false") {
    theButton.setAttribute("aria-pressed", "true");
  } else {
    theButton.setAttribute("aria-pressed", "false");
  }
}
