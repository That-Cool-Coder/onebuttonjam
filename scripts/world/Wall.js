class Wall extends EnvironmentItem {
    static textures = [];
    static textureAspectRatios = [];

    constructor(localPosition, localDirection, size) {

        // Don't load textures until an object is actually made
        if (Wall.textures.length == 0) {
            Wall.loadTextures();
        }

        super('wall', 'wall', localPosition, localDirection,
            size, Wall.findTexture(size), size, true);
    }

    static loadTextures() {
        Wall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/wall/wall1x1.png'));
        Wall.textureAspectRatios.push(1);
        Wall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/wall/wall2x1.png'));
        Wall.textureAspectRatios.push(2);
        Wall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/wall/wall3x1.png'));
        Wall.textureAspectRatios.push(3);
        Wall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/wall/wall4x1.png'));
        Wall.textureAspectRatios.push(4);
        Wall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/wall/wall5x1.png'));
        Wall.textureAspectRatios.push(5);
        Wall.textures.push(wrk.GameEngine.Texture.fromUrl('assets/world/wall/wall6x1.png'));
        Wall.textureAspectRatios.push(6);
    }

    static findTexture(size) {
        // Find the texture which best matches the aspect ratio

        var targetAspectRatio = size.x / size.y;

        var lowestDifference = Infinity;
        var bestTexture = Wall.textures[0];
        Wall.textures.forEach((texture, idx) => {
            var aspectRatio = Wall.textureAspectRatios[idx];
            var difference = wrk.abs(aspectRatio - targetAspectRatio);
            if (difference < lowestDifference) {
                lowestDifference = difference;
                bestTexture = texture;
            }
        });
        return bestTexture;
    }
}