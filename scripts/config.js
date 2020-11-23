// Like json but you don't have to wait for it to load in AJAX

const config = {
    bgColor : 0xffffff,
    targetSize : wrk.v(800, 500), // target size of canvas
    windowSpaceTaken : wrk.v(0.95, 0.9), // proportion of window that is taken up by canvas
    blackFadeTime : 1000, // how long the fade into/out of black takes
    blackFadeUpdateAmount : 20, // how many times the fade level is updated
    buttonTextFormat : {fontSize : 25, fill : 0x9cb7e7},
    headingTextFormat : {fontSize : 30, fill : 0x9cb7e7, stroke : 0x000000, strokeThickness : 2}
}
