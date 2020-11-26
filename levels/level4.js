// Like json but loaded as js

const level4 = {
    number : 4,
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
            position : wrk.v(1250, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1350, -75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1500, -125),
            size : wrk.v(300, 50),
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
            position : wrk.v(1725, 25),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1750, -25),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1725, -125),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1550, -25),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1650, -75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(400, -525),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(375, -575),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(350, -625),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(325, -675),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(300, -725),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(275, -775),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(562, -612),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1238, -112),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1288, -112),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1262, -112),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1312, -112),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1538, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1712, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1562, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1738, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(987, -438),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(987, -338),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(987, -388),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(987, -288),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(987, -412),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(987, -312),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(987, -362),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(987, -263),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(662, -262),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(688, -262),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(638, -675),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(1638, -225),
            direction : 'up'
        },
        {
            type : 'portal',
            position : wrk.v(475, -300),
            direction : 'up',
            color : "0x22dd22"
        },
        {
            type : 'portal',
            position : wrk.v(875, -300),
            direction : 'up',
            color : "0xff0000"
        },
        {
            type : 'portal',
            position : wrk.v(875, -50),
            direction : 'up',
            color : "0xff0000"
        },
        // Instruction explaining portal
        {
            type : 'label',
            position : wrk.v(400, -150),
            direction : 'up',
            text : 'This is a portal.\nIt teleports you to the\nother portal with the same color'
        },
        {
            type : 'portal',
            position : wrk.v(475, -50),
            direction : 'up',
            color : "0x22dd22"
        },
        {
            type : 'wall',
            position : wrk.v(50, -525),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1025, -325),
            size : wrk.v(250, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(550, -225),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(575, -100),
            size : wrk.v(200, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(850, -225),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(25, -575),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(0, -625),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-25, -675),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-50, -725),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-75, -775),
            size : wrk.v(50, 50),
            direction : 'up'
        },

    ]
}