class Player extends wrk.GameEngine.DrawableEntity {
    jumpStrength = 500;  
    gravityStrength = 700;

    topSpeed = 200;
    acceleration = 400;
    brakePower = 500;

    colliderSize = wrk.v(30, 60);

    worldComponentInteractions = {
        'wall' : obj => this.interactWithWall(obj),
        'rockWall' : obj => this.interactWithWall(obj),
        'portal' : obj => this.interactWithPortal(obj),
        'spike' : obj => this.interactWithSpike(obj),
        'levelEnd' : obj => this.interactWithLevelEnd(obj),
        'decoration' : () => {},
        'label' : () => {}
    }

    constructor(name, localPosition, localAngle, textures, textureSize, controllerDial,
        environment) {
        
        // Textures should be dict with values 'left', 'right', 'hurtLeft', 'hurtRight'
        // Environment should be a wrk.GameEngine.Entity with EnvironmentItems inside

        super(name, localPosition, localAngle, textures.right, textureSize);

        this.textures = textures;
        this.updateEnvironment(environment);
        this.controllerDial = controllerDial;
        this.reset();
    }

    reset() {
        this.setTexture(this.textures.right)
        this.spaceDownLastFrame = false;
        this.velocity = wrk.v(0, 0);
        this.direction = 'stopped'; // right left or stopped
        this.setFrozen(false);
        this.setWorldInteraction(true);
    }

    setFrozen(state) {
        this.frozen = state;
    }

    setWorldInteraction(state) {
        this.worldInteraction = state;
    }

    finishLevel() {
        this.setFrozen(true);
        unlockNextLevel();
        fadeToScene(levelSelectScreen);
    }

    get topLeftPos() {
        return wrk.v.copySub(this.globalPosition, wrk.v.copyDiv(this.colliderSize, 2));
    }

    get bottomRightPos() {
        return wrk.v.copyAdd(this.globalPosition, wrk.v.copyDiv(this.colliderSize, 2));
    }

    isTouching(component) {
        // Put these in in vars as they are recursive getters
        var selfTopLeft = this.topLeftPos;
        var selfBottomRight = this.bottomRightPos;
        var otherTopLeft = component.topLeftPos;
        var otherBottomRight = component.bottomRightPos;
        
        return rectRectCollision(selfTopLeft, selfBottomRight, otherTopLeft, otherBottomRight);
    }

    collisionSide(component) {

        // Put these in in vars as they are recursive getters
        var selfTopLeft = this.topLeftPos;
        var componentTopLeft = component.topLeftPos;
        var componentBottomRight = component.bottomRightPos;

        var componentColliderSize = wrk.v.copySub(componentBottomRight, componentTopLeft);

        return rectRectCollisionSide(selfTopLeft, this.colliderSize,
            componentTopLeft, componentColliderSize);
    }

    checkControl() {
        // Yes, this is singular. It's not called a one button jam for nothing.

        if (wrk.GameEngine.keyboard.keyIsDown('Space')) {
            if (! this.spaceDownLastFrame) {
                var crntAngle = this.controllerDial.crntAngle % (wrk.PI * 2);

                var quarterTurn = wrk.PI / 2;
                var eigthTurn = wrk.PI / 4;
                
                if ((crntAngle >= eigthTurn * 7 && crntAngle < wrk.PI * 2) ||
                    (crntAngle >= 0 && crntAngle < eigthTurn)) {
                    this.startJump();
                }
                else if (crntAngle >= eigthTurn && crntAngle < eigthTurn * 3) {
                    this.direction = 'right';
                    this.setTexture(this.textures.right);
                }
                else if (crntAngle >= eigthTurn * 3 && crntAngle < eigthTurn * 5) {
                    this.direction = 'stopped';
                }
                else {
                    this.direction = 'left';
                    this.setTexture(this.textures.left);
                }
            }
            this.spaceDownLastFrame = true;
        }
        else {
            this.spaceDownLastFrame = false;
        }
    }

    checkGrounded() {

        // Use a for...of instead of a foreach to allow break
        var grounded = false;
        for (var component of this.environment.children) {
            if (component.isWalkable) {
                if (this.collisionSide(component) == 'bottom') {
                    grounded = true;
                    break;
                }
            }
        }
        this.isGrounded = grounded;
    }

    checkFallenOffWorld() {
        if (this.localPosition.y > this.environment.fallOffHeight) {
            this.setFrozen(true);
            fadeToScene(levelSelectScreen);
        }
    }

    fall() {
        if (! this.isGrounded) {
            this.velocity.y += this.gravityStrength * wrk.GameEngine.deltaTime;
        }
    }

    groundedDebugTint() {
        if (this.isGrounded) this.sprite.tint = 0x00ff00;
        else this.sprite.tint = 0xffffff;
    }

    startJump() {
        if (this.isGrounded) {
            this.velocity.y = -this.jumpStrength;
        }
    }

    moveLeft() {
        var acceleration = this.acceleration * wrk.GameEngine.deltaTime;
        if (-this.topSpeed < this.velocity.x - acceleration) {
            this.velocity.x -= acceleration;
        }
        else {
            this.velocity.x = -this.topSpeed;
        }
    }

    moveRight() {
        var acceleration = this.acceleration * wrk.GameEngine.deltaTime;
        if (this.velocity.x + acceleration < this.topSpeed) {
            this.velocity.x += acceleration;
        }
        else {
            this.velocity.x = this.topSpeed;
        }
    }

    stop() {
        var brakingAmount = this.brakePower * wrk.GameEngine.deltaTime;
        if (this.velocity.x < -brakingAmount) {
            this.velocity.x += brakingAmount;
        }
        else if (this.velocity.x > brakingAmount) {
            this.velocity.x -= brakingAmount;
        }
        else this.velocity.x = 0;
    }

    interactWithWorld() {
        this.environment.children.forEach(component => {
            this.worldComponentInteractions[component.type](component);
        })
    }

    updateEnvironment(environment) {
        this.environment = environment;
    }

    debugKeybinds() {
        var speed = 5;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowUp')) this.localPosition.y -= speed;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowDown')) this.localPosition.y += speed;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowLeft')) this.localPosition.x -= speed;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowRight')) this.localPosition.x += speed;
    }

    update() {
        if (! this.frozen) {
            this.checkGrounded();

            this.checkFallenOffWorld()

            this.fall();
            this.checkControl();

            this.debugKeybinds();

            //this.groundedDebugTint();

            switch(this.direction) {
                case 'left':
                    this.moveLeft();
                    break;
                case 'right':
                    this.moveRight();
                    break;
                case 'stopped':
                    this.stop();
                    break;
            }

            var distToMove = wrk.v.copyMult(this.velocity, wrk.GameEngine.deltaTime);
            wrk.v.add(this.localPosition, distToMove);

            if (this.worldInteraction) {
                this.interactWithWorld();
            }
        }
    }

    // Interaction with world components
    // ---------------------------------
    

    interactWithWall(wall) {
        if (this.isTouching(wall)) {
            var collisionSide = this.collisionSide(wall);

            switch (collisionSide) {
                case 'left':
                    var overlap = wall.bottomRightPos.x - this.topLeftPos.x;
                    this.localPosition.x += overlap + 3;
                    break;

                case 'right':
                    var overlap = this.bottomRightPos.x - wall.topLeftPos.x;
                    this.localPosition.x -= overlap + 3;
                    break;

                case 'top':
                    var overlap = this.topLeftPos.y - wall.bottomRightPos.y;
                    this.localPosition.y -= overlap + 3;
                    break;

                case 'bottom':
                    var overlap = wall.topLeftPos.y - this.bottomRightPos.y;
                    this.localPosition.y += overlap;
                    this.velocity.y = 5;
                    break;
            }
        }
    }

    interactWithPortal(portal) {
        if (this.isTouching(portal)) portal.onCollidePlayer(this);
    }

    interactWithSpike(spike) {
        if (this.isTouching(spike)) {
            this.velocity = wrk.v(0, -300);
            this.direction = 'stopped';

            if (this.sprite.texture == this.textures.left ||
                this.sprite.texture == this.textures.hurtLeft) {
                
                this.setTexture(this.textures.hurtLeft);
            }
            else {
                this.setTexture(this.textures.hurtRight);
            }

            this.setWorldInteraction(false);
            setTimeout(() => {
                playScreen.restartLevel()
                fadeToScene(playScreen);
            }, 1000);
        }
    }

    interactWithLevelEnd(levelEnd) {
        if (this.isTouching(levelEnd)) {
            this.finishLevel();
        }
    }
}