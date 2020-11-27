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
            position : wrk.v(1675, 25),
            size : wrk.v(50, 50),
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
            position : wrk.v(1850, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2100, -25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2350, -75),
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
            position : wrk.v(325, -50),
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
            position : wrk.v(575, -100),
            size : wrk.v(200, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(750, -175),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1125, -175),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1250, -125),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1350, -75),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1450, -25),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1825, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2025, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1825, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2025, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1875, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2075, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1875, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2075, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(2362, -175),
            direction : 'up'
        },
        // Thing telling you to restart
        {
            type : 'label',
            position : wrk.v(940, -110),
            direction : 'up',
            text : 'If you get stuck, restart by clicking the pause button\nthen the restart button'
        },
    ]
}