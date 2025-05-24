const menuToggle = document.getElementById('menuToggle');
const topMenu = document.getElementById('topMenu');
const closeBtn = document.getElementById('closeBtn');

menuToggle.addEventListener('click', () => {
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
