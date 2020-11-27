// Like json but loaded as js

const level7 = {
    number : 7,
    fallOffHeight : 300,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/world/background2.png'),
    playerStartPosition : wrk.v(0, 0),
    environmentItems : [
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
            position : wrk.v(350, -558),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(325, -608),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(300, -658),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(275, -708),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(250, -758),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(225, -808),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-300, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(0, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(512, -645),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(462, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-112, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(488, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-88, -12),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(-262, -75),
            direction : 'up'
        },
        {
            type : 'portal',
            position : wrk.v(225, -325),
            direction : 'up',
            color : "0xff0000"
        },
        {
            type : 'portal',
            position : wrk.v(625, -325),
            direction : 'up',
            color : "0xff0000"
        },
        {
            type : 'wall',
            position : wrk.v(0, -558),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-25, -608),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-50, -658),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-75, -708),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-100, -758),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-125, -808),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(75, -100),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(475, -100),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(125, -150),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(525, -150),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(175, -200),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(575, -200),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(225, -250),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(625, -250),
            size : wrk.v(50, 50),
            direction : 'up'
        },

    ]
}