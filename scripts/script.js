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

var mainScene = new World();