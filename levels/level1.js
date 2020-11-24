// Like json but loaded as js

const level1 = {
    number : 1,
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
            type : 'rockWall',
            position : wrk.v(1200, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1725, 25),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1500, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1950, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2200, -25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2450, -75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(375, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(275, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(425, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(425, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(325, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(475, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(225, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(675, -100),
            size : wrk.v(200, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(850, -175),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        // Thing telling you to restart
        {
            type : 'label',
            position : wrk.v(1070, -110),
            direction : 'up',
            text : 'If you get stuck, restart by clicking the pause button\nthen the restart button'
        },
        {
            type : 'wall',
            position : wrk.v(1225, -175),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1350, -125),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1450, -75),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1550, -25),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1925, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2125, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1925, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2125, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1975, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2175, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1975, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2175, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(2462, -175),
            direction : 'up'
        },

    ]
}