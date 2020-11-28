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
    playerStartPosition : wrk.v(0, -130),
    environmentItems : [
        {
            type : 'grassWall',
            position : wrk.v(-150, -25),
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
            position : wrk.v(-750, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(150, -25),
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
            position : wrk.v(875, -200),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'grassWall',
            position : wrk.v(750, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(750, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'grassWall',
            position : wrk.v(-450, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },

    ]
}