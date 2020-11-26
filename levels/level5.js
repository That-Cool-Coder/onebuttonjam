// Like json but loaded as js

const level5 = {
    number : 5,
    fallOffHeight : 600,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/world/background2.png'),
    playerStartPosition : wrk.v(0, -80),
    environmentItems : [
        {
            type : 'rockWall',
            position : wrk.v(0, 75),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(700, 525),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-750, -650),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(250, 125),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-450, -525),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(450, 225),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(-250, -425),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2100, 75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2400, 75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(600, -625),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(575, -675),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(550, -725),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2950, 225),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(3200, 575),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(3500, 575),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(3075, 400),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(3275, 350),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(3275, 150),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(525, -775),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(500, -825),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, -875),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2475, -25),
            size : wrk.v(150, 50),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(762, -712),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-1188, -988),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-1212, -988),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2262, 38),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(-1488, -1050),
            direction : 'up'
        },
        {
            type : 'portal',
            position : wrk.v(700, 450),
            direction : 'up',
            color : "0xffff00"
        },
        {
            type : 'portal',
            position : wrk.v(-800, -725),
            direction : 'up',
            color : "0xffff00"
        },
        {
            type : 'wall',
            position : wrk.v(250, -625),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-1200, -950),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-1500, -950),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(225, -675),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(200, -725),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(0, -25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(175, -775),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(150, -825),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-925, -725),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(-975, -775),
            size : wrk.v(200, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(-1025, -712),
            size : wrk.v(75, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(-1025, -862),
            size : wrk.v(225, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(-75, 25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(75, 25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2075, 25),
            size : wrk.v(100, 50),
            direction : 'up'
        },

    ]
}