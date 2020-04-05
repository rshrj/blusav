window.onscroll = scrollFunction;

function scrollFunction() {
  var nav = document.querySelector("nav");
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.classList.add("nav-shrunk");
  } else {
    nav.classList.remove("nav-shrunk");
  }
}
