// Like json but loaded as js

const level1 = {
    playerStartPosition : wrk.v(0, 0),
    fallOffHeight : 300,
    backgroundType : 'image',
    backgroundTexture : wrk.GameEngine.Texture.fromUrl('assets/background2.png'),
    environmentItems : [
        // floor
        {
            type : 'rockWall',
            position : wrk.v(0, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        },
        // floor
        {
            type : 'rockWall',
            position : wrk.v(0, 25),
            direction : 'up',
            size : wrk.v(300, 50)
        }
    ]
}