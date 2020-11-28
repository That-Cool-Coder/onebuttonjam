class RandomlyMovingPlayer extends Player {
    movementProbability = 1 / 60;

    constructor(name, localPosition, localAngle, environment) {
        super(name, localPosition, localAngle, {}, environment);
    }

    checkControl() {
        if (Math.random() < this.movementProbability) {
            var direction = wrk.randint(0, 4);
            switch(direction) {
                case 0:
                    this.startJump();
                    break;
                case 1:
                    this.direction = 'right';
                    this.setTexture(this.textures.right);
                    break;         
                case 2:
                    this.direction = 'stopped';
                    break;
                case 3:
                    this.direction = 'left';
                    this.setTexture(this.textures.left);
                    break;
            }
        }
    }
}