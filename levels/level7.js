// Like json but loaded as js

const level7 = {
    number : 7,
    fallOffHeight : 10000,
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
            position : wrk.v(175, 150),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 1650),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 450),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 1950),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 1050),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 3150),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 4050),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 5550),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 7050),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 4950),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 6450),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 7950),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 4050),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 5550),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 7050),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 4950),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 6450),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 7950),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 8250),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 750),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 2250),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 2550),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 2850),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 3750),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 4650),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 6150),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 7650),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 3750),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 4650),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 6150),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 7650),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 1350),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 3450),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 4350),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 5850),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 7350),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 5250),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 6750),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 8250),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 4350),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 5850),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 7350),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 5250),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 6750),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 150),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 1650),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 450),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 1950),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 1050),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 3150),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 750),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 2250),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 2550),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 2850),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(175, 1350),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'rockWall',
            position : wrk.v(475, 3450),
            size : wrk.v(300, 50),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(462, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(438, 538),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(388, 538),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(288, 1662),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(362, 588),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2038),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 1938),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2238),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2538),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2838),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2088),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 1988),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2288),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2588),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2888),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2138),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2438),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2738),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2338),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2638),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2938),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2188),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2488),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2788),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2388),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2688),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2988),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(138, -12),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-138, -12),
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
            position : wrk.v(412, 538),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(288, 1638),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(363, 562),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2012),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3412),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 5163),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4412),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4162),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3912),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4663),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4912),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3662),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 1912),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3312),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 5263),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4312),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4262),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3812),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4763),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4812),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3762),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2212),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2512),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2812),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3612),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4963),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4612),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3962),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4112),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4463),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 5112),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3462),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2062),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3462),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 5113),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4462),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4112),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3962),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4613),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4962),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3612),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 1962),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3362),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 5213),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4362),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4212),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3862),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4713),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4862),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3712),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2262),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2562),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2862),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3662),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4913),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4662),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3912),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4162),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4413),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 5162),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3412),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2112),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2412),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2712),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3512),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 5063),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4512),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4062),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4012),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4563),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 5012),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3562),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2312),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2612),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2912),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3712),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4863),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4712),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3862),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4212),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4363),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 5212),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3362),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2162),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2462),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2762),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3562),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 5013),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4562),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4012),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4062),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4513),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 5062),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3512),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2362),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2662),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 2962),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(438, 3762),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4813),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4762),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3812),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 4262),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 4312),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(438, 5262),
            direction : 'left'
        },
        {
            type : 'spike',
            position : wrk.v(212, 3312),
            direction : 'right'
        },
        {
            type : 'spike',
            position : wrk.v(238, 1612),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(213, 1612),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(263, 1612),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-88, -12),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(412, 575),
            size : wrk.v(75, 50),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(237, 1650),
            size : wrk.v(75, 50),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(262, 3088),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(312, 5662),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(362, 3088),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(288, 3088),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(338, 5662),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(388, 3088),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(250, 8325),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(325, 8325),
            direction : 'up'
        },
        {
            type : 'levelEnd',
            position : wrk.v(400, 8325),
            direction : 'up'
        },
        {
            type : 'wall',
            position : wrk.v(275, 3150),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(325, 5725),
            size : wrk.v(100, 50),
            direction : 'right'
        },
        {
            type : 'wall',
            position : wrk.v(375, 3150),
            size : wrk.v(100, 50),
            direction : 'right'
        },

    ]
}