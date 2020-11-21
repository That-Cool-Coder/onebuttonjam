class Spike extends WorldComponent {
    static texture;

    size = wrk.v(30, 30);

    constructor(localPosition, localAngle) {
        if (Spike.texture == undefined) {
            Spike.loadTexture();
        }
        
        var size = wrk.v(30, 30)

        super('spike', 'spike', localPosition, localAngle, size,
        wrk.GameEngine.Texture.fromUrl('assets/spike.png'), size);
        
        //this.setColliderSize(this.size);
        //this.setTextureSize(this.size);
    }

    static loadTexture() {
        Spike.texture = wrk.GameEngine.Texture.fromUrl('assets/spike.png');
    }
}