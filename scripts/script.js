var targetAspectRatio = config.targetSize.x / config.targetSize.y;
var usableWindowSize = wrk.v(wrk.dom.viewportWidth() * config.windowSpaceTaken.x,
    wrk.dom.viewportHeight() * config.windowSpaceTaken.y);
var usableAspectRatio = usableWindowSize.x / usableWindowSize.y;

// If the window is wider
if (usableAspectRatio > targetAspectRatio) {
    var scale = usableWindowSize.y / config.targetSize.y;
}
else {
    var scale = usableWindowSize.x / config.targetSize.x;
}

wrk.GameEngine.init(config.targetSize, scale, config.bgColor);

var titleScreen = new TitleScreen();
var levelSelectScreen = new LevelSelectScreen();
var playScreen = new PlayScreen();
var pauseMenu = new PauseMenu();

wrk.GameEngine.selectScene(titleScreen);

// Pause the game if the tab changes to avoid massive deltaTime
setInterval(() => {
    if (document.hidden && wrk.GameEngine.crntScene == playScreen) {
        wrk.GameEngine.selectScene(pauseMenu);
    }
}, 10)

function testLevel(level) {
    playScreen.startLevel(level);
    wrk.GameEngine.selectScene(playScreen);
}

const isDevVersion = true;

console.log('This is a dev version based on test version #1');