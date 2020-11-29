// Like json but you don't have to wait for it to load in AJAX

const config = {
    gameName : 'Mountain Blob',
    aboutPageUrl : 'https://thatcoolcoder.itch.io/mountain-blob',

    // Window
    bgColor : 0xffffff,
    targetSize : wrk.v(800, 500), // target size of canvas
    windowSpaceTaken : wrk.v(0.95, 0.9), // proportion of window that is taken up by canvas

    // Black fade for changing scenes
    blackFadeTime : 500, // how long the fade into/out of black takes
    blackFadeUpdateAmount : 20, // how many times the fade level is updated

    // Text format
    buttonTextFormat : {fontSize : 25, fill : 0x9cb7e7},
    headingTextFormat : {fontSize : 30, fill : 0x9cb7e7, stroke : 0x000000, strokeThickness : 2},

    // Text
    creditsText : 'Made by ThatCoolCoder for the 1 Button Jam 2020',
}
