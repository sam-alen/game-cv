import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchToMouse: true,
    fullscreen: true,
    canvas: document.getElementById("game"),
});

