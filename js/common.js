const doc = document;
function init() {
  doc.body.innerWidth = doc.clientWidth;
}
window.addEventListener("resize", () => {
  init();
});
window.onload = init();
