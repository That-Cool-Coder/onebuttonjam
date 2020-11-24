class RockWall extends EnvironmentItem {
    static textures = [];
    static textureAspectRatios = [];

    extraTextureSize = wrk.v(30, 30)

    constructor(localPosition, localDirection, colliderSize) {

        // Don't load textures until they are actually needed
        if (RockWall.textures.length == 0) {
            RockWall.loadTextures();
        }

        super('rock wall', 'rockWall', localPosition, localDirection, colliderSize,
            PIXI.Texture.WHITE, wrk.v(1, 1), true);
        
        // Do this after super so can use 'this' keyword
        var size = wrk.v.copyAdd(colliderSize, this.extraTextureSize);
        this.setTexture(RockWall.findTexture(size));
        this.setTextureSize(size);
    }

    static loadTextures() {
        RockWall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/rockWall/rockWall2x1.png')); 
        RockWall.textureAspectRatios.push(2);
        RockWall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/rockWall/rockWall4x1.png')); 
        RockWall.textureAspectRatios.push(4);
        RockWall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/rockWall/rockWall1x1.png')); 
        RockWall.textureAspectRatios.push(1);
    }

    static findTexture(size) {
        // Find the texture which best matches the aspect ratio

        var targetAspectRatio = size.x / size.y;

        var lowestDifference = Infinity;
        var bestTexture = RockWall.textures[0];
        RockWall.textures.forEach((texture, idx) => {
            var aspectRatio = RockWall.textureAspectRatios[idx];
            var difference = wrk.abs(aspectRatio - targetAspectRatio);
            if (difference < lowestDifference) {
                lowestDifference = difference;
                bestTexture = texture;
            }
        });
        return bestTexture;
    }
}