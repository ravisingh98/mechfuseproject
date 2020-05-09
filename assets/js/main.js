window.addEventListener("load", init);
function init() {
  window.addEventListener("scroll", myscroll);
}
function myscroll() {
  var ypos = window.pageYOffset;
  if (ypos > 60) {
    document.querySelector(".header").className = "headerscroll";
    document.querySelector(".topbar").style.marginTop = "8px";
  }
  else {
    document.querySelector(".headerscroll").className = "header";
    document.querySelector(".topbar").style.marginTop = "25px";
  }
}