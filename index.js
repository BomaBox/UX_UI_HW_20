

var navbar = document.getElementById("navbar");
var sticky = navbar.sticky;
$("window").scroll (function(){;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add(".sticky")
  } else {
    navbar.classList.remove(".sticky");
  }
}})