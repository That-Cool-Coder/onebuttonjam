// Like json but loaded as js

const level3 = {
    number : 3,
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
            position : wrk.v(850, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1050, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1250, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1925, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2225, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2462, 25),
            size : wrk.v(175, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1500, 25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(225, -25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(325, -25),
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
            position : wrk.v(325, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(425, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(425, -225),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(325, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(425, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(325, -175),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(425, -175),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(425, -275),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(275, -25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(375, -25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(475, -25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(375, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(475, -125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(475, -225),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(375, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(475, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(375, -175),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(475, -175),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(475, -275),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(225, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(275, -75),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(650, -275),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(900, -275),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1600, -75),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1525, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'levelEnd',
            position : wrk.v(2338, -75),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1850, -75),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1950, -25),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(712, -312),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(688, -312),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1212, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1238, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1488, -63),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(1488, -38),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(1488, -13),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(1212, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1162, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(738, -312),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(762, -312),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1138, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1188, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2162, -13),
            direction : 'up'
        },
        // Thing warning you about spikes
        {
            type : 'label',
            position : wrk.v(688, -400),
            direction : 'up',
            text : 'Don\'t touch the spikes!'
        }
    ]
}