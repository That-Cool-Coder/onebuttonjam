class Hud extends wrk.GameEngine.Entity {

    dialPosFromBottomRight = wrk.v(100, 100);

    frameRatePosFromTopRight = wrk.v(50, 25);
    frameRateFormat = {fontFamily : 'Arial', fontSize: 24,
        fill : 0xffffff, stroke : 0x000000, strokeThickness : 1, align : 'center'}
    
    pauseButtonSize = wrk.v(100, 50);
    pauseButtonPosFromTopLeft = wrk.v(70, 50);

    constructor(name) {
        super(name, wrk.v(0, 0), 0);

        this.createFrameRateShower();
        this.createSpinningDial();
        this.createPauseButton();
    }

    createFrameRateShower() {
        var pos = wrk.v(wrk.GameEngine.canvasSize.x - this.frameRatePosFromTopRight.x,
            this.frameRatePosFromTopRight.y);
        var frameRateShower = new FrameRateShower(pos, wrk.PI, this.frameRateFormat);
        this.addChild(frameRateShower);
    }

    createSpinningDial() {
        var pos = wrk.v.copySub(wrk.GameEngine.canvasSize, this.dialPosFromBottomRight);
        this.dial = new SpinningDial(pos, 50, wrk.PI);
        this.addChild(this.dial);
    }

    createPauseButton() {
        var texture = wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button2x1.png')
        var pauseButton = new wrk.GameEngine.Button('Pause button',
            this.pauseButtonPosFromTopLeft, wrk.PI,
            this.pauseButtonSize, texture, 'Pause', config.buttonTextFormat);
        pauseButton.mouseUpCallbacks.add(() => {
            wrk.GameEngine.selectScene(pauseMenu);
        });
        this.addChild(pauseButton);
    }
}