// Like json but loaded as js

const level6 = {
    number : 6,
    fallOffHeight : 500,
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
            position : wrk.v(550, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(800, 75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(825, -2200),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1625, -2200),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(825, -1600),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1625, -1600),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(825, -1900),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1625, -1900),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(825, -1300),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1625, -1300),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1025, -2200),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1825, -2200),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1025, -1600),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1825, -1600),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1025, -1900),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1825, -1900),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1025, -1300),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1825, -1300),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(1100, 75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1500, 75),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1725, 75),
            size : wrk.v(150, 50),
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
            position : wrk.v(925, -2375),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1725, -2375),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(925, -1125),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(1725, -1125),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2550, -1875),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2800, -1525),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(3100, -1525),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(2675, -1700),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(2875, -1750),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(2875, -1950),
            size : wrk.v(300, 50),
            direction : 'right'
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
            type : 'portal',
            position : wrk.v(925, -2250),
            direction : 'up',
            color : "0x22dd22"
        },
        {
            type : 'portal',
            position : wrk.v(825, 0),
            direction : 'up',
            color : "0x22dd22"
        },
        {
            type : 'wall',
            position : wrk.v(850, -125),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2350, -125),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2650, -125),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2950, -125),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2350, -275),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2650, -275),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2950, -275),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3125, -200),
            size : wrk.v(200, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(2475, -25),
            size : wrk.v(150, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(925, -25),
            size : wrk.v(150, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1225, 225),
            size : wrk.v(250, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1150, -125),
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
            position : wrk.v(1788, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2412, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2438, -63),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(2438, -13),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(2438, 37),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(2438, -88),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(2438, -38),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(2212, -88),
            direction : 'down'
        },
        {
            type : 'spike',
            position : wrk.v(2438, 12),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(2562, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2712, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2862, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3012, -162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3088, -162),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(3088, -187),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(3088, -212),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(3088, -237),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(2488, -237),
            direction : 'down'
        },
        {
            type : 'spike',
            position : wrk.v(2638, -237),
            direction : 'down'
        },
        {
            type : 'spike',
            position : wrk.v(2788, -238),
            direction : 'down'
        },
        {
            type : 'spike',
            position : wrk.v(2938, -238),
            direction : 'down'
        },
        {
            type : 'spike',
            position : wrk.v(1588, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1688, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1488, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1738, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1538, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1638, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1438, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1762, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1562, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1662, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1462, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1712, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1512, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1612, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1412, 38),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(975, -212),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1175, -212),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(288, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(500, -112),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(888, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1688, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(938, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1738, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(988, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1788, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(262, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(862, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1662, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(912, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1712, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(962, -1162),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1762, -1162),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(3162, -1625),
            direction : 'up'
        },
        {
            type : 'portal',
            position : wrk.v(1675, 350),
            direction : 'up',
            color : "0xff0000"
        },
        {
            type : 'portal',
            position : wrk.v(2325, 0),
            direction : 'up',
            color : "0xffff00"
        },
        {
            type : 'portal',
            position : wrk.v(2525, -1950),
            direction : 'up',
            color : "0xffff00"
        },
        {
            type : 'portal',
            position : wrk.v(1725, -2250),
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
            position : wrk.v(1350, 375),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1650, 425),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1775, 325),
            size : wrk.v(150, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1700, 225),
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
            position : wrk.v(500, -50),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(-125, -808),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1375, -150),
            size : wrk.v(400, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(975, -175),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1875, 175),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1925, 125),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2075, 25),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1175, -175),
            size : wrk.v(50, 50),
            direction : 'up'
        },

    ]
}