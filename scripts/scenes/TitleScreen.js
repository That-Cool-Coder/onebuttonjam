class TitleScreen extends wrk.GameEngine.Scene {
    constructor() {
        super('Title Screen');

        this.createBackground();
        this.createPlayButton();
    }
    
    createBackground() {
        var background = new wrk.GameEngine.DrawableEntity('title screen background',
            wrk.GameEngine.canvasSize, wrk.PI,
            wrk.GameEngine.Texture.fromUrl('assets/background.png'), wrk.GameEngine.canvasSize,
            wrk.v(1, 1));
        this.addChild(background);
    }

    createPlayButton() {
        var playButton = new wrk.GameEngine.Button('play button',
            wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2), wrk.PI, wrk.v(100, 50),
            wrk.GameEngine.Texture.fromUrl('assets/button2x1.png'), 'Play',
            config.headingTextFormat);

        playButton.mouseUpCallbacks.add(() => {
            fadeToScene(levelSelectScreen);
        });

        this.addChild(playButton);
    }
}