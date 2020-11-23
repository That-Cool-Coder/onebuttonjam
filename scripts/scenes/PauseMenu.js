class PauseMenu extends wrk.GameEngine.Scene {
    resumeButtonPosFromCenter = wrk.v(0, 100);
    resumeButtonSize = wrk.v(100, 50);

    backgroundColor = 0x000000;

    constructor() {
        super('pause menu', wrk.v(0, 0), 0);

        this.createBackground();
        this.createResumeButton();
    }

    createBackground() {
        var background = new wrk.GameEngine.DrawableEntity('pause menu background',
            wrk.GameEngine.canvasSize, wrk.PI, PIXI.Texture.WHITE, wrk.GameEngine.canvasSize,
            wrk.v(1, 1));
        background.setTint(this.backgroundColor);
        this.addChild(background);
    }

    createResumeButton() {
        var texture = wrk.GameEngine.Texture.fromUrl('assets/button2x1.png');
        var pos = wrk.v.copyAdd(wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2),
            this.resumeButtonPosFromCenter);
        var resumeButton = new wrk.GameEngine.Button('resume button', pos, wrk.PI,
            this.resumeButtonSize, texture, 'Resume', config.buttonTextFormat);
        resumeButton.mouseUpCallbacks.add(() => {
            wrk.GameEngine.selectScene(playScreen);
        });
        this.addChild(resumeButton);
    }
}