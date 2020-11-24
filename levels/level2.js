// Like json but loaded as js

const level2 = {
    number : 2,
    fallOffHeight : 300,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/world/background2.png'),
    playerStartPosition : wrk.v(0, 0),
    environmentItems : [
        {
            type : 'rockWall',
            position : wrk.v(0, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(300, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        // test spike
        {
            type : 'spike',
            position : wrk.v(600, -12.5),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(600, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(900, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(900, 25),
            direction : 'up'
        }
    ]
}