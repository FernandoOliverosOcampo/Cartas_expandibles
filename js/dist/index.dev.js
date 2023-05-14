"use strict";

var panels = document.querySelectorAll('.panel');
panels.forEach(function (panels) {
  panels.addEventListener('click', function () {
    removeActiveClasses();
    panels.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach(function (panels) {
    panels.classList.remove('active');
  });
}