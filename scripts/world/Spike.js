class Spike extends EnvironmentItem {
    static texture;

    size = wrk.v(30, 30);

    constructor(localPosition, localDirection) {
        if (Spike.texture == undefined) {
            Spike.loadTexture();
        }

        super('spike', 'spike', localPosition, localDirection, wrk.v(0, 0),
        wrk.GameEngine.Texture.fromUrl('assets/spike.png'), wrk.v(0, 0), false);
        
        this.setColliderSize(this.size);
        this.setTextureSize(this.size);
    }

    static loadTexture() {
        Spike.texture = wrk.GameEngine.Texture.fromUrl('assets/spike.png');
    }
}