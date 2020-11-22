class Hud extends wrk.GameEngine.Entity {

    dialPosFromBottomRight = wrk.v(100, 100);

    frameRatePosFromTopRight = wrk.v(50, 25);
    frameRateFormat = {fontFamily : 'Arial', fontSize: 24,
        fill : 0xffffff, stroke : 0x000000, strokeThickness : 1, align : 'center'}

    constructor(name) {
        super(name, wrk.v(0, 0), 0);

        var pos = wrk.v(wrk.GameEngine.canvasSize.x - this.frameRatePosFromTopRight.x,
            this.frameRatePosFromTopRight.y);
        var frameRateShower = new FrameRateShower(pos, wrk.PI, this.frameRateFormat);
        this.addChild(frameRateShower);

        var pos = wrk.v.copySub(wrk.GameEngine.canvasSize, this.dialPosFromBottomRight);
        this.dial = new SpinningDial(pos, 50, wrk.PI);
        this.addChild(this.dial);
    }
}