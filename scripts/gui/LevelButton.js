class LevelButton extends wrk.GameEngine.Button {
    static texture;

    disabledTint = 0xaaaaa;

    size = wrk.v(50, 50);

    constructor(levelNumber, isUnlocked, localPosition) {

        // Don't load the texture until it is needed
        if (LevelButton.texture == undefined) {
            LevelButton.loadTexture();
        }

        var format = {fontSize : 25, fill : 0x9cb7e7};
        super('level button #' + levelNumber, localPosition, wrk.PI, wrk.v(1, 1),
            LevelButton.texture, levelNumber + 1, format);

        this.setTextureSize(this.size);

        this.levelNumber = levelNumber;
        this.isUnlocked = isUnlocked;

        if (this.isUnlocked) {
            this.mouseUpCallbacks.add(() => {
                playScreen.startLevel(levels[this.levelNumber]);
                fadeToScene(playScreen);
            });
        }
        else {
            this.setTint(this.disabledTint);
        }
    }

    static loadTexture() {
        LevelButton.texture = wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button1x1.png');
    }
}