class GrassWall extends EnvironmentItem {
    static textures = [];
    static textureAspectRatios = [];

    extraTextureSize = wrk.v(30, 30)

    constructor(localPosition, localDirection, colliderSize) {

        // Don't load textures until they are actually needed
        if (GrassWall.textures.length == 0) {
            GrassWall.loadTextures();
        }

        super('grass wall', 'grassWall', localPosition, localDirection, colliderSize,
            PIXI.Texture.WHITE, wrk.v(1, 1), true);
        
        // Do this after super so can use 'this' keyword
        var size = wrk.v.copyAdd(colliderSize, this.extraTextureSize);
        this.setTexture(GrassWall.findTexture(size));
        this.setTextureSize(size);
    }

    static loadTextures() {
        GrassWall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/grassWall/grassWall4x1.png')); 
        GrassWall.textureAspectRatios.push(4);
        GrassWall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/grassWall/grassWall2x1.png')); 
        GrassWall.textureAspectRatios.push(2);
        GrassWall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/grassWall/grassWall1x1.png')); 
        GrassWall.textureAspectRatios.push(1);
    }

    static findTexture(size) {
        // Find the texture which best matches the aspect ratio

        var targetAspectRatio = size.x / size.y;

        var lowestDifference = Infinity;
        var bestTexture = GrassWall.textures[0];
        GrassWall.textures.forEach((texture, idx) => {
            var aspectRatio = GrassWall.textureAspectRatios[idx];
            var difference = wrk.abs(aspectRatio - targetAspectRatio);
            if (difference < lowestDifference) {
                lowestDifference = difference;
                bestTexture = texture;
            }
        });
        return bestTexture;
    }
}