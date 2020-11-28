class PlayScreen extends wrk.GameEngine.Scene {

    constructor() {
        super('play screen');

        this.hud = new Hud('Play screen hud');
        this.addChild(this.hud);

        this.world = new World(this.hud.dial);
        this.addChild(this.world);
    }

    startLevel(level) {
        this.crntLevel = level;
        this.world.loadLevel(level);

        // Remove and replace hud to make it be on top of the world
        this.removeChild(this.hud);
        this.addChild(this.hud);
    }

    restartLevel() {
        fadeIntoBlack().then(() => {
            this.startLevel(this.crntLevel);
            fadeOutOfBlack();
        });
    }

    showFinishScreen() {
        var level = finishScreen;
        this.world.playFinishScreen(level);

        // Remove and replace hud to make it be on top of the world
        this.removeChild(this.hud);
        this.addChild(this.hud);
    }
}