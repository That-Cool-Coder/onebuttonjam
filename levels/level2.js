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
        {
            type : 'rockWall',
            position : wrk.v(2100, -75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(3000, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2350, 75),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2225, 25),
            size : wrk.v(150, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(175, -25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(425, -25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(300, -75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(750, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(925, 25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1150, -75),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1375, -125),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2325, -175),
            size : wrk.v(250, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(2625, -75),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1700, -225),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(3050, -75),
            direction : 'up'
        },

    ]
}