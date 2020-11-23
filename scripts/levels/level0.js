// Like json but loaded as js

const level0 = {
    number : 0,
    playerStartPosition : wrk.v(0, 0),
    fallOffHeight : 300,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/background2.png'),
    environmentItems : [
        // left side wall
        {
            type : 'rockWall',
            position : wrk.v(-425, -150),
            direction : 'right',
            size : wrk.v(300, 50)
        },
        // left side wall
        {
            type : 'rockWall',
            position : wrk.v(-425, -450),
            direction : 'right',
            size : wrk.v(300, 50)
        },
        // floor
        {
            type : 'rockWall',
            position : wrk.v(-300, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        },
        // floor
        {
            type : 'rockWall',
            position : wrk.v(0, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        },
        // first instruction
        {
            type : 'label',
            position : wrk.v(0, -100),
            direction : 'up',
            text : 'Use the compass to\nmove left and right.\nTo stop, press space when the arrow is pointing down (fixme)'
        },
        // floor
        {
            type : 'rockWall',
            position : wrk.v(300, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        },
        // floor
        {
            type : 'rockWall',
            position : wrk.v(600, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        },
        // second instruction
        {
            type : 'label',
            position : wrk.v(550, -150),
            direction : 'up',
            text : 'Press space when the arrow is\npointing up to jump (fixme)'
        },
        // obstacle to jump over
        {
            type : 'rockWall',
            position : wrk.v(600, -35),
            direction : 'up',
            size : wrk.v(70, 70)
        },
        // floor
        {
            type : 'rockWall',
            position : wrk.v(900, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        },
        // floor
        {
            type : 'rockWall',
            position : wrk.v(1200, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        },
        // end of level
        {
            type : 'levelEnd',
            position : wrk.v(1200, -50),
            direction : 'up'
        }
    ]
}