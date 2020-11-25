// Like json but loaded as js

const level5 = {
    number : 5,
    fallOffHeight : 300,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/world/background2.png'),
    playerStartPosition : wrk.v(0, -200),
    environmentItems : [
        {
            type : 'spike',
            position : wrk.v(-100, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-75, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-50, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(-25, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(0, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(0, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(25, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(50, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(75, -100),
            direction : 'up'
        },
        {
            type : 'spike',
            position : wrk.v(100, -100),
            direction : 'up'
        }
    ]
}