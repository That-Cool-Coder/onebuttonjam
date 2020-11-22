class LevelSelectScreen extends wrk.GameEngine.Scene {
    levelsPerRow = 5;

    constructor() {
        super('level select screen');

        this.createBackground();
        this.createTitle();
        this.createBackButton();
        this.createLevelButtons();
    }
    
    createBackground() {
        var background = new wrk.GameEngine.DrawableEntity('title screen background',
            wrk.GameEngine.canvasSize, wrk.PI,
            wrk.GameEngine.Texture.fromUrl('assets/background.png'), wrk.GameEngine.canvasSize,
            wrk.v(1, 1));
        this.addChild(background);
    }

    createTitle() {
        
        var pos = wrk.v(wrk.GameEngine.canvasSize.x / 2, 50);
        var label = new wrk.GameEngine.Label('level select header', 'Level select',
            pos, wrk.PI,
            {fontSize : 30, fill : 0x9cb7e7, stroke : 0x000000, strokeThickness : 2});
        this.addChild(label);
    }

    createBackButton() {
        var pos = wrk.v(95, 50);
        var button = new wrk.GameEngine.Button('back button', pos, wrk.PI, wrk.v(150, 50),
            wrk.GameEngine.Texture.fromUrl('assets/button3x1.png'),
            'Main menu', {fontSize : 25, fill : 0x9cb7e7});
        button.mouseUpCallbacks.add(() => {
            wrk.GameEngine.selectScene(titleScreen);
        });
        this.addChild(button);
    }

    createLevelButtons() {
        var row = 0;
        var col = 1;
        var columnWidth = wrk.GameEngine.canvasSize.x / (this.levelsPerRow + 1);
        var topRowY = 150;
        var rowHeight = 75;

        levels.forEach((level, idx) => {
            var pos = wrk.v(col * columnWidth, row * rowHeight + topRowY);
            var button = new LevelButton(idx, pos);
            this.addChild(button);

            col += 1;
            if (col > this.levelsPerRow) {
                col = 0;
                row += 1;
            }
        })
    }
}