// Like json but loaded as js

const finishScreen = {
    number : 'finishScreen',
    fallOffHeight : 6000,
    randomBlobs : 10,
    blobSpawnHeight : -200,
    blobSpawnMinX : -500,
    blobSpawnMaxX : 500,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/world/sunnyBackground.png'),
    playerStartPosition : wrk.v(0, -530),
    environmentItems : [
        {
            type : 'grassWall',
            position : wrk.v(-300, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(-50, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(200, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(450, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(700, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(-800, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(-1050, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(-1175, -200),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'grassWall',
            position : wrk.v(825, -200),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'grassWall',
            position : wrk.v(-550, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        // Thing telling you that you have finished
        {
            type : 'label',
            position : wrk.v(0, -200),
            text : 'Hooray! You managed to find your way back to Blobland!\n' + 
                '(To exit, click pause then click quit level)',
            direction : 'up'
        }
    ]
}