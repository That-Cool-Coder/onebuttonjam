class SpinningDial extends wrk.GameEngine.Entity {
    static backgroundTexture = wrk.GameEngine.Texture.fromUrl('assets/ui/dial.png');
    static arrowTexture = wrk.GameEngine.Texture.fromUrl('assets/ui/dialArrow.png');
    static arrowAspectRatio = 1;

    spinSpeed = wrk.PI * 1.5;

    constructor(localPosition, radius, localAngle) {
        super('spinning dial', localPosition, localAngle);

        this.radius = radius;

        this.background = new wrk.GameEngine.DrawableEntity('dial background',
            wrk.v(0, 0), 0, SpinningDial.backgroundTexture,
            wrk.v(this.radius * 2, this.radius * 2));
        this.addChild(this.background);
        
        var arrowSize = wrk.v(this.radius * SpinningDial.arrowAspectRatio, this.radius);
        this.arrow = new wrk.GameEngine.DrawableEntity('dial arrow',
            wrk.v(0, 0), 0, SpinningDial.arrowTexture, arrowSize, wrk.v(0.5, 1));
        this.addChild(this.arrow);
    }

    get crntAngle() {
        return this.arrow.localAngle;
    }

    update() {
        this.arrow.setLocalAngle(this.arrow.localAngle + this.spinSpeed * wrk.GameEngine.deltaTime);
    }
}