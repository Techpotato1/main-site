console.log("Javascript Loading...");
function getFullscreenElement() {
  return (
    document.fullscreenElement ||
    document.mozFullscreenElement ||
    document.webkitFullscreenElement
  );
}
function toggleFullscreen() {
  if (getFullscreenElement()) {
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen().catch(console.log);
  }
}
document.addEventListener("fullscreenchange", () => {
  console.log("Fullscreen Changed");
});
console.log("Javascript Loaded!");