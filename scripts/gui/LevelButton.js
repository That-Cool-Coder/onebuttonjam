class LevelButton extends wrk.GameEngine.Button {
    static textures;

    disabledTint = 0xaaaaa;

    size = wrk.v(50, 50);

    constructor(levelNumber, isUnlocked, localPosition) {

        // Don't load the texture until it is needed
        if (LevelButton.textures == undefined) {
            LevelButton.loadTextures();
        }

        if (isUnlocked) var texture = LevelButton.textures.unlocked;
        else var texture = LevelButton.textures.locked;


        super('level button #' + levelNumber, localPosition, wrk.PI, wrk.v(1, 1),
            texture, levelNumber + 1, config.buttonTextFormat);

        this.setTextureSize(this.size);

        this.levelNumber = levelNumber;
        this.isUnlocked = isUnlocked;

        if (this.isUnlocked) {
            this.mouseUpCallbacks.add(() => {
                playScreen.startLevel(levels[this.levelNumber]);
                fadeToScene(playScreen);
            });
        }
    }

    static loadTextures() {
        LevelButton.textures = {
            unlocked : wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button1x1.png'),
            locked : wrk.GameEngine.Texture.fromUrl('assets/ui/buttons/button1x1disabled.png')
        }
    }
}