class PlayScreen extends wrk.GameEngine.Scene {
    dialPosFromBottomRight = wrk.v(100, 100);

    frameRatePosFromTopRight = wrk.v(50, 25);
    frameRateFormat = {fontFamily : 'Arial', fontSize: 24,
        fill : 0xffffff, stroke : 0x000000, strokeThickness : 1, align : 'center'}

    constructor() {
        super('play screen');

        this.hud = new wrk.GameEngine.Entity('Play screen hud', wrk.v(0, 0), 0);

        var pos = wrk.v(wrk.GameEngine.canvasSize.x - this.frameRatePosFromTopRight.x,
            this.frameRatePosFromTopRight.y);
        var frameRateShower = new FrameRateShower(pos, wrk.PI, this.frameRateFormat);
        this.hud.addChild(frameRateShower);

        var pos = wrk.v.copySub(wrk.GameEngine.canvasSize, this.dialPosFromBottomRight);
        this.hud.dial = new SpinningDial(pos, 50, wrk.PI);
        this.hud.addChild(this.hud.dial);

        this.world = new World(this.hud.dial);
        this.addChild(this.world);

        // Add hud after adding world to make it on top
        this.addChild(this.hud);
    }
}