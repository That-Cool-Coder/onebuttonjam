class Player extends wrk.GameEngine.DrawableEntity {
    jumpStrength = 400;  
    gravityStrength = 700;

    topSpeed = 200;
    acceleration = 400;
    brakePower = 500;

    colliderSize = wrk.v(30, 60);

    worldComponentInteractions = {
        'wall' : obj => this.interactWithWall(obj),
        'portal' : obj => this.interactWithPortal(obj),
        'spike' : obj => this.interactWithSpike(obj),
    }

    constructor(name, localPosition, localAngle, texture, textureSize, controllerDial,
        worldComponents) {

        super(name, localPosition, localAngle, texture, textureSize);
        
        this.setWorldComponents(worldComponents);

        this.spaceDownLastFrame = false;

        this.velocity = wrk.v(0, 0);
        this.controllerDial = controllerDial;
        this.direction = 'stopped'; // right left or stopped
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

        return rectRectCollisionSide(selfTopLeft, this.colliderSize,
            componentTopLeft, component.colliderSize);
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
                }
                else if (crntAngle >= eigthTurn * 3 && crntAngle < eigthTurn * 5) {
                    this.direction = 'stopped';
                }
                else {
                    this.direction = 'left';
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
        for (var component of this.worldComponents) {
            if (component.type == 'wall') {
                if (this.collisionSide(component) == 'bottom') {
                    grounded = true;
                    break;
                }
            }
        }
        this.isGrounded = grounded;
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
        this.worldComponents.forEach(component => {
            this.worldComponentInteractions[component.type](component);
        })
    }

    setWorldComponents(components) {
        this.worldComponents = components;
    }

    debugKeybinds() {
        var speed = 5;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowUp')) this.localPosition.y -= speed;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowDown')) this.localPosition.y += speed;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowLeft')) this.localPosition.x -= speed;
        if (wrk.GameEngine.keyboard.keyIsDown('ArrowRight')) this.localPosition.x += speed;
    }

    update() {
        this.checkGrounded();

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

        this.interactWithWorld();
    }

    // Interaction with world components
    // ---------------------------------
    

    interactWithWall(wall) {
        if (this.isTouching(wall)) {
            var collisionSide = this.collisionSide(wall);

            switch (collisionSide) {
                case 'left':
                    var overlap = wall.bottomRightPos.x - this.topLeftPos.x;
                    this.localPosition.x += overlap;
                    break;

                case 'right':
                    var overlap = this.bottomRightPos.x - wall.topLeftPos.x;
                    this.localPosition.x -= overlap;
                    break;

                case 'top':
                    var overlap = this.topLeftPos.y - wall.bottomRightPos.y;
                    this.localPosition.y -= overlap;
                    break;

                case 'bottom':
                    var overlap = wall.topLeftPos.y - this.bottomRightPos.y;
                    this.localPosition.y += overlap + 1;
                    this.velocity.y = 0;
                    break;
            }
        }
    }

    interactWithPortal(portal) {
        if (this.isTouching(portal)) portal.onCollidePlayer(this);
    }

    interactWithSpike(spike) {
        if (this.isTouching(spike)) {
            alert('Ouch');
            this.velocity = wrk.v(0, -300);
            this.direction = 'stopped';
        }
    }
}