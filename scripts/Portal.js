class Portal extends wrk.GameEngine.DrawableEntity {
    static baseTexture = wrk.GameEngine.Texture.fromUrl('assets/portalBase.png');
    static centerTexture = wrk.GameEngine.Texture.fromUrl('assets/portalCenter.png')

    /** If a portal is not on a 0/180 degree angle then collision will be off */
    constructor(localPosition, localAngle, size, color) {
        super('portal', localPosition, localAngle, Portal.baseTexture, size);

        var diameter = wrk.min(this.textureSize.x, this.textureSize.y);
        this.center = new wrk.GameEngine.DrawableEntity('portal center',
            wrk.v(0, 0), 0, Portal.centerTexture, wrk.v(diameter, diameter));
        this.addChild(this.center);

        this.setTint(color);

        this.outputPortal = null; // where things that go in the portal exit
    }

    setOutputPortal(portal) {
        this.outputPortal = portal;
    }

    onCollidePlayer(player) {
        // Not good, will make person teleport back and forth each frame
        player.globalPosition = wrk.v.copy(this.outputPortal.globalPosition);
    }
}