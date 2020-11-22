class LevelEnd extends EnvironmentItem {
    static texture;

    size = wrk.v(50, 100);

    constructor(localPosition, localDirection) {
        if (LevelEnd.texture == undefined) {
            LevelEnd.loadTexture();
        }

        super('level end', 'levelEnd', localPosition, localDirection,
        wrk.v(1, 1), LevelEnd.texture, wrk.v(1, 1), true);

        // Do these after super to allow use of 'this'
        this.setColliderSize(this.size);
        this.setTextureSize(this.size);
    }

    static loadTexture() {
        LevelEnd.texture = wrk.GameEngine.Texture.fromUrl('assets/levelEnd.png');
    }
}