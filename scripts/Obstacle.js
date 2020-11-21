class Obstacle extends wrk.GameEngine.DrawableEntity {
    static texture = wrk.GameEngine.Texture.fromUrl('assets/obstacle.png');

    constructor(localPosition, size) {
        super('obstacle', localPosition, wrk.PI , Obstacle.texture, size);
    }
}