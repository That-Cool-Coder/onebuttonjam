class World extends wrk.GameEngine.Scene {
    constructor() {
        super('world');

        this.dial = new SpinningDial(wrk.v(100, 100));
    }
}