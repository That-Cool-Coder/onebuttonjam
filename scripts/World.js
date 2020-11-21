class World extends wrk.GameEngine.Entity {
    cameraMovementLag = 3;
    playerStartPos = wrk.v(200, 200);

    constructor(playerControllerDial, localPosition=wrk.v(0, 0), localAngle=0) {
        super('world', localPosition, localAngle);

        this.obstacleHolder = new wrk.GameEngine.Entity('obstacle holder', wrk.v(0, 0), 0);
        this.obstacleHolder.addChild(new Obstacle(wrk.v(150, 300), wrk.v(400, 50)));
        this.addChild(this.obstacleHolder);

        this.portalHolder = new wrk.GameEngine.Entity('portal holder', wrk.v(0, 0), 0);
        this.portalHolder.addChild(new Portal(wrk.v(300, 225), wrk.PI, wrk.v(50, 100), 0xff0000));
        this.addChild(this.portalHolder);

        var texture = wrk.GameEngine.Texture.fromUrl('assets/player.png');
        this.player = new Player('Main player', this.playerStartPos, wrk.PI, texture,
            playerControllerDial, this.obstacleHolder.children);
        this.addChild(this.player);

        this.previousPlayerPositions = []; // oldest at start
        wrk.doNTimes(this.cameraMovementLag, () => {
            this.previousPlayerPositions.push(wrk.v.copy(this.player.localPosition));   
        })
    }

    update() {
        var position = this.previousPlayerPositions[0];
        wrk.v.mult(position, -1);
        wrk.v.add(position, wrk.v.copyDiv(wrk.GameEngine.canvasSize, 2));
        this.previousPlayerPositions.push(wrk.v.copy(this.player.localPosition));

        // remove oldest player pos if there are too many
        if (this.previousPlayerPositions.length > this.cameraMovementLag) {
            this.previousPlayerPositions.shift();
        }

        this.setLocalPosition(position);
    }
}