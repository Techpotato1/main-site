console.log("Javascript Loaded!");
function getFullscreenElement() {
    return (
    document.fullscreenElement ||
        document.mozFullscreenElement ||
        document.webkitFullscreenElement);
}
function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen();
    }
    else {
        document.documentElement.requestFullscreen().catch((console.log));
    }
}
document.addEventListener("fullscreenchange", () => {
    console.log("Fullscreen Changed");
});
