class World extends wrk.GameEngine.Entity {
    cameraMovementLag = 3;

    constructor(playerControllerDial, localPosition=wrk.v(0, 0), localAngle=0) {
        super('World', localPosition, localAngle);

        this.background = new wrk.GameEngine.DrawableEntity('World background',
            wrk.GameEngine.canvasSize, wrk.PI, PIXI.Texture.WHITE,
            wrk.GameEngine.canvasSize, wrk.v(1, 1));
        
        this.addChild(this.background); // make the background be behind everything

        this.environment = new wrk.GameEngine.Entity('Environment', wrk.v(0, 0), 0);

        this.addChild(this.environment);

        this.player = new Player('Main player', wrk.v(0, 0), wrk.PI,
            playerControllerDial, this.environment);
        this.addChild(this.player);

        this.movePlayerTo(wrk.v(0, 0)); // temporary until level loading is in place
    }

    // Player
    // ------

    movePlayerTo(localPosition) {
        this.player.setLocalPosition(localPosition);
        
        // Set up camera movement with lag
        this.previousPlayerPositions = []; // oldest at start
        wrk.doNTimes(this.cameraMovementLag, () => {
            this.previousPlayerPositions.push(wrk.v.copy(this.player.localPosition));   
        });
    }

    // Levels
    // ------

    playFinishScreen(levelData) {
        this.loadLevel(levelData);

        this.randomlyMovingPlayerHolder = new wrk.GameEngine.Entity(
            'randomly moving player holder', wrk.v(0, 0), wrk.PI);
        this.addChild(this.randomlyMovingPlayerHolder);

        this.environment.fallOffHeight = Infinity;

        wrk.doNTimes(levelData.randomBlobs, () => {
            var posX = wrk.randint(levelData.blobSpawnMinX, levelData.blobSpawnMaxX);
            var pos = wrk.v(posX, levelData.blobSpawnHeight);
            var player = new RandomlyMovingPlayer('randomly moving player', pos, wrk.PI,
                this.environment);
            this.randomlyMovingPlayerHolder.addChild(player);
            this.addChild(player);
        })

        this.update = () => this.finishScreenUpdate();
    }

    loadLevel(levelData) {
        this.movePlayerTo(levelData.playerStartPosition);
        this.player.reset();
        this.crntLevel = levelData;

        if (this.randomlyMovingPlayerHolder != undefined) {
            this.removeChild(this.randomlyMovingPlayerHolder);
        }

        if (levelData.backgroundType == 'image') {
            this.background.setTexture(levelData.backgroundTexture);
        }
        else {
            this.background.setTexture(PIXI.Texture.WHITE);
            this.background.setTint(levelData.backgroundColor);
        }
        this.background.setTextureSize(wrk.GameEngine.canvasSize);

        this.environment.removeChildren();
        var portals = [];
        levelData.environmentItems.forEach(item => {
            var loadedItem = this.loadItem(item);
            if (item != undefined) {
                this.environment.addChild(loadedItem);
                if (loadedItem.type == 'portal') {
                    portals.push(loadedItem);
                }
            }
        });

        this.linkPortals(portals);

        this.environment.fallOffHeight = levelData.fallOffHeight;

        // Move player to front
        this.removeChild(this.player);
        this.addChild(this.player);

        this.update = () => this.normalUpdate();
    }

    loadItem(item) {
        switch(item.type) {
            case 'wall':
                var item = new Wall(item.position, item.direction, item.size);
                return item;
            case 'rockWall':
                var item = new RockWall(item.position, item.direction, item.size);
                return item;
            case 'grassWall':
                var item = new GrassWall(item.position, item.direction, item.size);
                return item;
            case 'spike':
                var item = new Spike(item.position, item.direction);
                return item;
            case 'portal':
                var item = new Portal(item.position, item.direction, item.color);
                return item;
            case 'levelEnd':
                var item = new LevelEnd(item.position, item.direction);
                return item;
            case 'label':
                var item = new Label(item.text, item.position, item.direction, item.light);
                return item;
            case 'decoration':
                var item = new Decoration(item.name, item.position, item.direction,
                    item.texture, item.size);
                return item;
        }
    }

    linkPortals(portals) {
        // Link the each portal to the portal that matches it

        portals.forEach(portal => {
            portal.linkToMatchingPortal(portals);
        });
    }

    itemPositionToVector(pos) {
        return wrk.v(...pos);
    }

    // Camera
    // ------

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

    normalUpdate() {
        this.cameraMovement();

        // Stop the background from moving
        this.background.setGlobalPosition(wrk.GameEngine.canvasSize);
    }

    finishScreenUpdate() {

        this.cameraMovement();

        // Stop the background from moving
        this.background.setGlobalPosition(wrk.GameEngine.canvasSize);
    }
}