class Portal extends WorldComponent {

    cooldownTime = 1000;

    /** If a portal is not on a 0/180 degree angle then collision will be off */
    constructor(localPosition, localAngle, size, color) {

        // Don't load textures until an object is actually made
        if (Portal.baseTexture == undefined) {
            Portal.loadTextures();
        }

        super('portal', 'portal', localPosition, localAngle, size, Portal.baseTexture, size);

        var diameter = wrk.min(this.textureSize.x, this.textureSize.y);
        this.center = new wrk.GameEngine.DrawableEntity('portal center',
            wrk.v(0, 0), 0, Portal.centerTexture, wrk.v(diameter, diameter));
        this.addChild(this.center);

        this.lastUsed = -Infinity;

        this.setColor(color);

        this.outputPortal = null; // where things that go in the portal exit
    }

    static loadTextures() {
        Portal.baseTexture = wrk.GameEngine.Texture.fromUrl('assets/portalBase.png');
        Portal.centerTexture = wrk.GameEngine.Texture.fromUrl('assets/portalCenter.png');
    }

    setColor(color) {
        this.setTint(color);
    }

    linkTo(portal) {
        this.outputPortal = portal;
        if (portal != null) {
            if (portal.outputPortal != this) portal.linkTo(this);
        }
    }

    unlink() {
        this.linkTo(null);
    }

    canBeUsed() {
        return (performance.now() - this.lastUsed > this.cooldownTime);
    }

    startCooldownTimer() {
        this.lastUsed = performance.now();
    }

    onCollidePlayer(player) {
        if (this.canBeUsed() && this.outputPortal != null) {
            player.setGlobalPosition(this.outputPortal.globalPosition);
            this.startCooldownTimer();
            this.outputPortal.startCooldownTimer();
        }
    }
}