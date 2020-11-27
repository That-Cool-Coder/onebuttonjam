class Portal extends EnvironmentItem {

    cooldownTime = 1000;
    size = wrk.v(50, 100);

    sounds = {
        teleport : new wrk.Sound('assets/world/portal/teleport.mp3')
    }
    
    constructor(localPosition, direction, color) {

        // Don't load textures until an object is actually made
        if (Portal.baseTexture == undefined) {
            Portal.loadTextures();
        }

        super('portal', 'portal', localPosition, direction,
            wrk.v(0, 0), Portal.baseTexture, wrk.v(0, 0));
        
        this.setColliderSize(this.size);
        this.setTextureSize(this.size);

        this.center = new wrk.GameEngine.DrawableEntity('portal center',
            wrk.v(0, 0), 0, Portal.centerTexture, this.textureSize);
        this.addChild(this.center);

        this.lastUsed = -Infinity;

        this.setColor(color);

        this.outputPortal = null; // where things that go in the portal exit
    }

    static loadTextures() {
        Portal.baseTexture = wrk.GameEngine.Texture.fromUrl('assets/world/portal/portalBase.png');
        Portal.centerTexture = wrk.GameEngine.Texture.fromUrl('assets/world/portal/portalCenter.png');
    }

    setColor(color) {
        this.color = color;
        this.setTint(color);
    }

    linkToMatchingPortal(portals) {
        // Link this to the portal with the matching color
        for (var portal of portals) {
            if (portal != this &&
                portal.color == this.color) {
                this.linkTo(portal);
            }
        }
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
            this.sounds.teleport.play();
        }
    }
}