class TitleScreen extends wrk.GameEngine.Scene {
    constructor() {
        super('Title Screen');

        this.createBackground();
        this.createPlayButton();
        this.createCredits();
    }
    
    createBackground() {
        var background = new wrk.GameEngine.DrawableEntity('title screen background',
            wrk.GameEngine.canvasSize, wrk.PI,
            wrk.GameEngine.Texture.fromUrl('assets/world/background.png'), wrk.GameEngine.canvasSize,
            wrk.v(1, 1));
        this.addChild(background);
    }

    createPlayButton() {
        var playButton = new wrk.GameEngine.Button('play button',
            wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2), wrk.PI, wrk.v(100, 50),
            wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button2x1.png'), 'Play',
            config.buttonTextFormat);

        playButton.mouseUpCallbacks.add(() => {
            fadeToScene(levelSelectScreen);
        });

        this.addChild(playButton);
    }
    
    createCredits() {
        var format = wrk.obj.oneLevelCopy(config.headingTextFormat);
        format.fontSize = 20;
        var credits = new wrk.GameEngine.Label('credits', config.creditsText,
            wrk.v.copySub(wrk.GameEngine.canvasSize, wrk.v(200, 30)), wrk.PI,
            format);
        this.addChild(credits);
    }
}