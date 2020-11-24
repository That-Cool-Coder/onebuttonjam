class PauseMenu extends wrk.GameEngine.Scene {
    headingPos = wrk.v(wrk.GameEngine.canvasSize.x / 2, 100);

    restartLevelButtonPos = wrk.v(wrk.GameEngine.canvasSize.x / 2, 200);
    restartButtonSize = wrk.v(150, 50);

    quitLevelButtonPos = wrk.v(wrk.GameEngine.canvasSize.x / 2, 300);
    quitLevelButtonSize = wrk.v(150, 50);

    resumeButtonPos = wrk.v(wrk.GameEngine.canvasSize.x / 2, 400);
    resumeButtonSize = wrk.v(125, 50);

    backgroundColor = 0x000000;

    constructor() {
        super('pause menu', wrk.v(0, 0), 0);

        this.createBackground();
        this.createHeading();
        this.createRestartLevelButton();
        this.createQuitLevelButton();
        this.createResumeButton();
    }

    createBackground() {
        var background = new wrk.GameEngine.DrawableEntity('pause menu background',
            wrk.GameEngine.canvasSize, wrk.PI, PIXI.Texture.WHITE, wrk.GameEngine.canvasSize,
            wrk.v(1, 1));
        background.setTint(this.backgroundColor);
        this.addChild(background);
    }

    createHeading() {
        var heading = new wrk.GameEngine.Label('pause menu heading', 'Paused',
            this.headingPos, wrk.PI, config.headingTextFormat);
        this.addChild(heading);
    }

    createRestartLevelButton() {
        var texture = wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button3x1.png');
        var restartLevelButton = new wrk.GameEngine.Button('restart button',
            this.restartLevelButtonPos, wrk.PI,
            this.restartButtonSize, texture, 'Restart level', config.buttonTextFormat);
        restartLevelButton.mouseUpCallbacks.add(() => {
            playScreen.world.player.setFrozen(true);
            wrk.GameEngine.selectScene(playScreen);
            playScreen.restartLevel();
        });
        this.addChild(restartLevelButton);
    }

    createQuitLevelButton() {
        var texture = wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button3x1.png');
        var quitLevelButton = new wrk.GameEngine.Button('quit button',
            this.quitLevelButtonPos, wrk.PI,
            this.quitLevelButtonSize, texture, 'Quit level', config.buttonTextFormat);
        quitLevelButton.mouseUpCallbacks.add(() => {
            fadeToScene(levelSelectScreen);
        });
        this.addChild(quitLevelButton);
    }

    createResumeButton() {
        var texture = wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button2.5x1.png');
        var resumeButton = new wrk.GameEngine.Button('resume button',
            this.resumeButtonPos, wrk.PI,
            this.resumeButtonSize, texture, 'Resume', config.buttonTextFormat);
        resumeButton.mouseUpCallbacks.add(() => {
            wrk.GameEngine.selectScene(playScreen);
        });
        this.addChild(resumeButton);
    }
}