function fadeToScene(scene) {
    fadeIntoBlack().then(() => {
        wrk.GameEngine.selectScene(scene);
        fadeOutOfBlack();
    });
}

var blackSprite;
var blackFadeInterval;
var blackFadeEndPromise;

function fadeIntoBlack() {
    if (! wrk.GameEngine.crntScene.children.includes(blackSprite)) {
        if (blackSprite == undefined) {
            blackSprite = new wrk.GameEngine.DrawableEntity('black fade sprite',
                wrk.GameEngine.canvasSize, wrk.PI, PIXI.Texture.WHITE, wrk.GameEngine.canvasSize,
                wrk.v(1, 1));
            blackSprite.setTint(0x000000);
        }

        wrk.GameEngine.crntScene.addChild(blackSprite);
        blackSprite.sprite.alpha = 0;

        blackFadeInterval = setInterval(updateFadeIntoBlack,
            config.blackFadeTime / config.blackFadeUpdateAmount);
        var promise = new Promise(resolve => {
            setTimeout(() => {
                blackSprite.parent.removeChild(blackSprite);
                resolve();
            }, config.blackFadeTime);
        });
        return promise;
    }
    else {
        var promise = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, config.blackFadeTime);
        });
        return promise;
    }
}

function updateFadeIntoBlack() {
    if (blackSprite.sprite.alpha < 1) {
        blackSprite.sprite.alpha += 1 / config.blackFadeUpdateAmount;
        setTimeout(updateFadeIntoBlack, config.blackFadeTime / config.blackFadeUpdateAmount);
    }
    else {
        clearInterval(blackFadeInterval);
    }
}

function fadeOutOfBlack() {
    if (! wrk.GameEngine.crntScene.children.includes(blackSprite)) {
        if (blackSprite == undefined) {
            blackSprite = new wrk.GameEngine.DrawableEntity('black fade sprite',
                wrk.GameEngine.canvasSize, wrk.PI, PIXI.Texture.WHITE, wrk.GameEngine.canvasSize,
                wrk.v(1, 1));
            blackSprite.setTint(0x000000);
        }

        wrk.GameEngine.crntScene.addChild(blackSprite);
        blackSprite.sprite.alpha = 1;

        blackFadeInterval = setInterval(updateFadeOutOfBlack,
            config.blackFadeTime / config.blackFadeUpdateAmount);
        var promise = new Promise(resolve => {
            setTimeout(() => {
                blackSprite.parent.removeChild(blackSprite);
                resolve();
            }, config.blackFadeTime);
        });
        return promise;
    }
    else {
        var promise = new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, config.blackFadeTime);
        });
        return promise;
    }
}

function updateFadeOutOfBlack() {
    if (blackSprite.sprite.alpha > 0) {
        blackSprite.sprite.alpha -= 1 / config.blackFadeUpdateAmount;
        setTimeout(updateFadeOutOfBlack, config.blackFadeTime / config.blackFadeUpdateAmount);
    }
    else {
        clearInterval(blackFadeInterval);
    }
}