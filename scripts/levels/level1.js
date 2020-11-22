// Like json but loaded as js

const level1 = {
    playerStartPosition : wrk.v(200, 400),
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/background2.png'),
    environmentItems : [
        {
            type : 'wall',
            position : wrk.v(125, 500),
            direction : 'up',
            size : wrk.v(250, 50)
        },
        {
            type : 'wall',
            position : wrk.v(375, 500),
            direction : 'up',
            size : wrk.v(250, 50)
        },
        {
            type : 'wall',
            position : wrk.v(340, 425),
            direction : 'right',
            size : wrk.v(100, 50)
        },
        {
            type : 'wall',
            position : wrk.v(390, 375),
            direction : 'right',
            size : wrk.v(200, 50)
        },
        {
            type : 'wall',
            position : wrk.v(440, 325),
            direction : 'right',
            size : wrk.v(300, 50)
        },
        {
            type : 'spike',
            position : wrk.v(15, 460),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(300, 460),
            direction : 'up'
        }
    ]
}