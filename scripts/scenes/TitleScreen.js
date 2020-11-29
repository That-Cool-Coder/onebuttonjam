class TitleScreen extends wrk.GameEngine.Scene {
    constructor() {
        super('Title Screen');

        this.createBackground();
        this.createTitle();
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

    createTitle() {
        var title = new wrk.GameEngine.DrawableEntity('title',
            wrk.v(wrk.GameEngine.canvasSize.x / 2, 150), wrk.PI,
            wrk.GameEngine.Texture.fromUrl('assets/ui/title.png'), wrk.v(400, 200));
        this.addChild(title);
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
            wrk.v(wrk.GameEngine.canvasSize.x / 2, wrk.GameEngine.canvasSize.y - 30), wrk.PI,
            format);
        this.addChild(credits);
    }
}