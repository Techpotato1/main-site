console.log("Loading Javascript...");
//Fullscreen
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
  console.log("Fullscreen changed");
});
//Resize elements to fit within screen
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
window.addEventListener("resize", () => {
  console.log("Window resized.");
  var resizeWidthPercent = window.innerWidth/windowWidth*100;
  var resizeHeightPercent = window.innerHeight/windowHeight*100;
  document.getElementById("title").style.fontSize = Math.round(Math.min(resizeWidthPercent*40/100, resizeHeightPercent*40/100)) + "px";
  document.getElementById("title-name").style.fontSize = Math.round(Math.min(resizeWidthPercent*160/100, resizeHeightPercent*160/100)) + "px";
  document.getElementById("youtube").style.fontSize = Math.round(Math.min(resizeWidthPercent*40/100, resizeHeightPercent*40/100)) + "px";
  document.getElementById("youtube-title").style.fontSize = Math.round(Math.min(resizeWidthPercent*150/100, resizeHeightPercent*150/100)) + "px";
  document.getElementById("youtube-video").style.width = Math.round(Math.min(resizeWidthPercent*500/100, resizeHeightPercent*500/100)) + "px";
  document.getElementById("youtube-video").style.height = Math.round(Math.min(resizeWidthPercent*300/100, resizeHeightPercent*300/100)) + "px";
  document.getElementById("youtube-playlist").style.width = Math.round(Math.min(resizeWidthPercent*500/100, resizeHeightPercent*500/100)) + "px";
  document.getElementById("youtube-playlist").style.height = Math.round(Math.min(resizeWidthPercent*300/100, resizeHeightPercent*300/100)) + "px";
  document.getElementById("github").style.fontSize = Math.round(Math.min(resizeWidthPercent*90/100, resizeHeightPercent*90/100)) + "px";
  document.getElementById("github").style.marginTop = Math.round(Math.min(resizeWidthPercent*150/100, resizeHeightPercent*150/100)) + "px";
  document.getElementById("github-title").style.fontSize = Math.round(Math.min(resizeWidthPercent*150/100, resizeHeightPercent*150/100)) + "px";
  document.getElementById("github-projects").style.fontSize = Math.round(Math.min(resizeWidthPercent*90/100, resizeHeightPercent*90/100)) + "px";
  document.getElementById("morningscript").style.fontSize = Math.round(Math.min(resizeWidthPercent*65/100, resizeHeightPercent*65/100)) + "px";
  document.getElementById("morningscript-download").style.fontSize = Math.round(Math.min(resizeWidthPercent*40/100, resizeHeightPercent*40/100)) + "px";
  document.getElementById("website").style.fontSize = Math.round(Math.min(resizeWidthPercent*65/100, resizeHeightPercent*65/100)) + "px";
  document.getElementById("website-download").style.fontSize = Math.round(Math.min(resizeWidthPercent*40/100, resizeHeightPercent*40/100)) + "px";
});
console.log("Javascript loaded!");