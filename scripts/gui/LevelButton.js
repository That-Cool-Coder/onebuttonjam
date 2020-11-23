class LevelButton extends wrk.GameEngine.Button {
    static texture;

    size = wrk.v(50, 50);

    constructor(levelNumber, localPosition) {

        // Don't load the texture until it is needed
        if (LevelButton.texture == undefined) {
            LevelButton.loadTexture();
        }

        var format = {fontSize : 25, fill : 0x9cb7e7};
        super('level button #' + levelNumber, localPosition, wrk.PI, wrk.v(1, 1),
            LevelButton.texture, levelNumber + 1, format);

        this.setTextureSize(this.size);

        this.levelNumber = levelNumber;

        this.mouseUpCallbacks.add(() => {
            playScreen.startLevel(levels[this.levelNumber]);
            fadeToScene(playScreen);
        })
    }

    static loadTexture() {
        LevelButton.texture = wrk.GameEngine.Texture.fromUrl('assets/button1x1.png');
    }
}