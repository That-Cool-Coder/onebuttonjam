class Player extends wrk.GameEngine.DrawableEntity {
    jumpStrength = 400;  
    gravityStrength = 700;

    topSpeed = 200;
    acceleration = 400;
    brakePower = 500;

    size = wrk.v(30, 60);

    constructor(name, localPosition, localAngle, texture, controllerDial,
        obstacles) {

        super(name, localPosition, localAngle, texture, wrk.v(1, 1));

        this.setTextureSize(this.size); // call this after super to allow use of this

        this.obstacles = obstacles;

        this.spaceDownLastFrame = false;

        this.velocity = wrk.v(0, 0);
        this.controllerDial = controllerDial;
        this.direction = 'stopped'; // right left or stopped
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
        // Use a for of loop to allow break
        var grounded = false;

        for (var obstacle of this.obstacles) {
            var thisBottomPos = this.localPosition.y + this.size.y / 2
            var obstacleTopPos = obstacle.localPosition.y - obstacle.textureSize.y / 2;
            if (thisBottomPos >= obstacleTopPos) {
                this.localPosition.y = obstacleTopPos - this.size.y / 2;
                this.velocity.y = 0;
                grounded = true;
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

    update() {
        this.checkGrounded();

        this.fall();
        this.checkControl();

        this.groundedDebugTint();

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
    }
}