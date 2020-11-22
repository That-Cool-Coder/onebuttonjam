class Decoration extends EnvironmentItem {
    constructor(name, localPosition, localDirection, texture, textureSize) {
        super(name, 'decoration', localPosition, localDirection, wrk.v(0, 0),
        texture, textureSize, false);
    }
}