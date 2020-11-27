// Like json but loaded as js

const level8 = {
    number : 8,
    fallOffHeight : 600,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/world/background2.png'),
    playerStartPosition : wrk.v(0, -30),
    environmentItems : [
        {
            type : 'rockWall',
            position : wrk.v(950, -525),
            size : wrk.v(300, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(925, -575),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(900, -625),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(875, -675),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(850, -725),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'rockWall',
            position : wrk.v(825, -775),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-100, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(700, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1500, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2300, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3100, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3900, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4700, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(675, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1475, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2275, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3075, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3875, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4675, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(800, -375),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1600, -375),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2400, -375),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3200, -375),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4000, -375),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4800, -375),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(725, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1525, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(2325, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3125, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3925, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(4725, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(875, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1675, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(2475, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3275, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(4075, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(4875, -288),
            size : wrk.v(125, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(-100, -200),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(100, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(900, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1700, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2500, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3300, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4100, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4900, 25),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(925, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1725, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2525, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3325, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4125, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4925, -200),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(100, -200),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-175, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(175, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(625, -87),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1425, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(2225, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3025, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3825, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(4625, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(975, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1775, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(2575, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3375, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(4175, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(4975, -88),
            size : wrk.v(175, 50),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(1112, -612),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-62, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(738, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1538, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2338, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3138, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3938, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-38, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(762, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1562, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2362, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3162, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3962, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-12, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(788, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1588, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2388, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3188, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3988, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(12, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(812, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1612, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2412, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3212, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(4012, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(38, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(838, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1638, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2438, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3238, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(4038, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(62, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(862, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(1662, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(2462, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(3262, 638),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(4062, 638),
            direction : 'up'
        },
        {
            type : 'portal',
            position : wrk.v(700, -50),
            direction : 'up',
            color : "0x22dd22"
        },
        {
            type : 'portal',
            position : wrk.v(1500, -50),
            direction : 'up',
            color : "0x00ffff"
        },
        {
            type : 'portal',
            position : wrk.v(2400, -275),
            direction : 'up',
            color : "0x00ffff"
        },
        {
            type : 'portal',
            position : wrk.v(2500, -50),
            direction : 'up',
            color : "0x00ff00"
        },
        {
            type : 'portal',
            position : wrk.v(3200, -275),
            direction : 'up',
            color : "0x00ff00"
        },
        {
            type : 'portal',
            position : wrk.v(3100, -50),
            direction : 'up',
            color : "0x000000"
        },
        {
            type : 'portal',
            position : wrk.v(3900, -50),
            direction : 'up',
            color : "0x80ff00"
        },
        {
            type : 'portal',
            position : wrk.v(3200, 400),
            direction : 'up',
            color : "0x000000"
        },
        {
            type : 'portal',
            position : wrk.v(4000, 400),
            direction : 'up',
            color : "0x000000"
        },
        {
            type : 'portal',
            position : wrk.v(1600, -275),
            direction : 'up',
            color : "0x22dd22"
        },
        {
            type : 'portal',
            position : wrk.v(900, -50),
            direction : 'up',
            color : "0x2222dd"
        },
        {
            type : 'portal',
            position : wrk.v(1700, -50),
            direction : 'up',
            color : "0xffaa00"
        },
        {
            type : 'portal',
            position : wrk.v(2300, -50),
            direction : 'up',
            color : "0xffffff"
        },
        {
            type : 'portal',
            position : wrk.v(3300, -50),
            direction : 'up',
            color : "0x0000ff"
        },
        {
            type : 'portal',
            position : wrk.v(4000, -275),
            direction : 'up',
            color : "0x0000ff"
        },
        {
            type : 'portal',
            position : wrk.v(4100, -50),
            direction : 'up',
            color : "0x963b20"
        },
        {
            type : 'portal',
            position : wrk.v(4800, -275),
            direction : 'up',
            color : "0x963b20"
        },
        {
            type : 'portal',
            position : wrk.v(1600, 400),
            direction : 'up',
            color : "0xffaa00"
        },
        {
            type : 'portal',
            position : wrk.v(2400, 400),
            direction : 'up',
            color : "0xffffff"
        },
        {
            type : 'portal',
            position : wrk.v(800, 425),
            direction : 'up',
            color : "0x2222dd"
        },
        {
            type : 'portal',
            position : wrk.v(-100, -50),
            direction : 'up',
            color : "0xffff00"
        },
        {
            type : 'portal',
            position : wrk.v(0, 400),
            direction : 'up',
            color : "0xffff00"
        },
        {
            type : 'portal',
            position : wrk.v(100, -50),
            direction : 'up',
            color : "0xff0000"
        },
        {
            type : 'portal',
            position : wrk.v(800, -275),
            direction : 'up',
            color : "0xff0000"
        },
        {
            type : 'wall',
            position : wrk.v(575, -575),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(550, -625),
            size : wrk.v(200, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(-100, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(700, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1500, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(2300, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3100, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3900, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(100, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(900, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(1700, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(2500, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(3300, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(4100, 500),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(0, 325),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(800, 325),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1600, 325),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2400, 325),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3200, 325),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4000, 325),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(0, 675),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(800, 675),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(1600, 675),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(2400, 675),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(3200, 675),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(4000, 675),
            size : wrk.v(250, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(525, -675),
            size : wrk.v(150, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(500, -725),
            size : wrk.v(100, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(475, -775),
            size : wrk.v(50, 50),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(4900, -75),
            direction : 'up'
        },

    ]
}