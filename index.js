var myNav = document.querySelector('navbar');
window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 5) {
    document.querySelector('.navbar').classList.add("navbar-light");
    document.querySelector('.navbar').classList.add("bg-light");
  } else {
    document.querySelector('.navbar').classList.remove("navbar-light");
    document.querySelector('.navbar').classList.remove("bg-light");
  }
};
