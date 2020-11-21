class World extends wrk.GameEngine.Entity {
    cameraMovementLag = 3;
    playerStartPos = wrk.v(200, 200);

    constructor(playerControllerDial, localPosition=wrk.v(0, 0), localAngle=0) {
        super('world', localPosition, localAngle);

        this.worldObjectHolder = new wrk.GameEngine.Entity('world object holder', wrk.v(0, 0), 0);
        this.addChild(this.worldObjectHolder);

        this.worldObjectHolder.addChild(new Wall(wrk.v(150, 300), wrk.v(400, 50)));
        this.worldObjectHolder.addChild(new Spike(wrk.v(100, 260), wrk.PI));
        var p = (new Portal(wrk.v(300, 225), wrk.PI, wrk.v(50, 100), 0xae2d2f));
        var p2 = (new Portal(wrk.v(-50, 225), wrk.PI, wrk.v(50, 100), 0xae2d2f));
        p.linkTo(p2);
        this.worldObjectHolder.addChild(p);
        this.worldObjectHolder.addChild(p2);

        var texture = wrk.GameEngine.Texture.fromUrl('assets/playerLeft.png');
        this.player = new Player('Main player', this.playerStartPos, wrk.PI,
            texture, wrk.v(30, 60), playerControllerDial, this.worldObjectHolder.children);
        this.addChild(this.player);

        this.previousPlayerPositions = []; // oldest at start
        wrk.doNTimes(this.cameraMovementLag, () => {
            this.previousPlayerPositions.push(wrk.v.copy(this.player.localPosition));   
        })
    }

    cameraMovement() {
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

    update() {
        this.cameraMovement();
    }
}