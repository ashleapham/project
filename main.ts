namespace SpriteKind {
    export const fish = SpriteKind.create()
}
function fishFood () {
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.fish)
        tiles.placeOnTile(mySprite, value)
        tiles.setTileAt(value, assets.tile`myTile`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . c c c c . . . . 
            . . . . . . c c d d d d c . . . 
            . . . . . c c c c c c d c . . . 
            . . . . c c 4 4 4 4 d c c . . . 
            . . . c 4 d 4 4 4 4 4 1 c . c c 
            . . c 4 4 4 1 4 4 4 4 d 1 c 4 c 
            . c 4 4 4 4 1 4 4 4 4 4 1 c 4 c 
            f 4 4 4 4 4 1 4 4 4 4 4 1 4 4 f 
            f 4 4 4 f 4 1 c c 4 4 4 1 f 4 f 
            f 4 4 4 4 4 1 4 4 f 4 4 d f 4 f 
            . f 4 4 4 4 1 c 4 f 4 d f f f f 
            . . f f 4 d 4 4 f f 4 c f c . . 
            . . . . f f 4 4 4 4 c d b c . . 
            . . . . . . f f f f d d d c . . 
            . . . . . . . . . . c c c . . . 
            `, SpriteKind.fish)
        tiles.placeOnTile(mySprite, value)
        tiles.setTileAt(value, assets.tile`myTile`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
let mySprite: Sprite = null
let sharky = sprites.create(img`
    ..............fffcc.............
    ..............fbbddc............
    ...............fbbddc...........
    ccc............fcbbccf..........
    cbbcc.........ffccccccffffff....
    .cbbdc.....fffcbbbbbbbbbbbbbff..
    .fbbddc..ffcccbbbbcbcbbbbbbbbbff
    ..fbbdfffcccccbbbcbcbbffbbbbbcbf
    ..fcbbbcccccccbbbcbcb1ff1111bbbf
    ..fccbcccccccccbbbbbb11111111bf.
    .fcbbfffccccccccbbbb11cc33cccf..
    .fbbf...cbdbcccccbbb111c131cf...
    fbbf.....ccdddddfbbbc111c33f....
    fff........ccddfbbdbf1111ff.....
    .............cfbbdbfccccc.......
    ..............fffff.............
    `, SpriteKind.Player)
let sharky2 = sprites.create(img`
    ...........fffcc....................
    ...........fbbbbcfffffffff..........
    ............fbfffbbbbbbbbbf.........
    ............ffbbbbffb111bbf.........
    ..........ffcbbbbbff11111bf.........
    .........fcccbcbcbb11cccc1f.........
    ccccc...fcccbcbcbbb1c1c1cf..........
    cbbddccfccccbcbcbbb1333c............
    .ccbddbcccccbbbbbbb1c333c...........
    ..ccbbcccccccbbbbb11c133c...........
    ..fccbffccccccbbbb111c31cc..........
    ..fccf.cbbcccccbbbc111111c..........
    .fcbbf..cdddddfbbbc1111cc...........
    .fbbf....cdddfbbdbffccc.............
    fbbf......ccfbbdbf..................
    fff.........fffff...................
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level4`)
sharky.setPosition(7, 91)
sharky2.setPosition(7, 61)
controller.player1.moveSprite(sharky)
controller.player2.moveSprite(sharky)
