const landscapeImages = [
  'img/landscape/l1.jpg',
  'img/landscape/l2.jpg',
  'img/landscape/l3.jpeg',
  'img/landscape/l4.jpeg',
];

const portraitImages = [
  'img/portrait/p1.jpeg',
  'img/portrait/p2.jpeg',
  'img/portrait/p3.jpeg',
  'img/portrait/p4.jpeg'
];

function isPortraitScreen() {
  return window.innerHeight > window.innerWidth;
}

const images = isPortraitScreen() ? portraitImages : landscapeImages;
const randomImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${randomImage})`;

const hamburger = document.getElementById('hamburger');
const topMenu = document.getElementById('topMenu');
const closeBtn = document.getElementById('closeBtn');

hamburger.addEventListener('click', () => {
  topMenu.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  topMenu.classList.remove('open');
});

document.getElementById("menuToggle").addEventListener("click", function () {
  document.getElementById("topMenu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("topMenu").classList.remove("open");
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

document.addEventListener("dragstart", function (e) {
  e.preventDefault();
});