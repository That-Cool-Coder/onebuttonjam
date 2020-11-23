// Like json but loaded as js

var level0ControlPrompt = 'See that spinning arrow in the bottom right corner?\n' + 
    'Press the spacebar to trigger it.\n' + 
    'Trigger when the arrow is pointing left to start walking left.\n' +
    'Trigger when the arrow is pointing right to start walking right.\n' + 
    'Trigger when the arrow is pointing down to stop walking.';

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
            position : wrk.v(0, -150),
            direction : 'up',
            text : level0ControlPrompt
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
            text : 'To jump, trigger when the arrow points up.'
        },
        // obstacle to jump over
        {
            type : 'wall',
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
        // third instruction
        {
            type : 'label',
            position : wrk.v(1200, -150),
            direction : 'up',
            text : 'Reach the *thing* to finish the level'
        },
        // end of level
        {
            type : 'levelEnd',
            position : wrk.v(1200, -50),
            direction : 'up'
        },
        // floor
        {
            type : 'rockWall',
            position : wrk.v(1400, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        },
        // test spike
        {
            type : 'spike',
            position : wrk.v(1500, -12.5),
            direction : 'up'
        },
        // side wall at end
        {
            type : 'rockWall',
            position : wrk.v(1625, -150),
            direction : 'right',
            size : wrk.v(300, 50)
        },
        // side wall at end
        {
            type : 'rockWall',
            position : wrk.v(1625, -450),
            direction : 'right',
            size : wrk.v(300, 50)
        }
    ]
}