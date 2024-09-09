scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    besttime = Math.min(besttime, counter)
    if (m2==0) {
        blockSettings.writeNumber("bestscore", besttime)
    } else {
        blockSettings.writeNumber("bestscore2", besttime)
    }
    game.reset()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    v = !(v)
    if (v&&mySprite) {
        mySprite.vy = mySprite.vx
        mySprite.vx = 0
    } else if (mySprite){
        mySprite.vx = 0 - mySprite.vy
        mySprite.vy = 0
    }
})
game.onUpdate(function() {
   if (mySprite) {
       if (mySprite.vx == 0 && mySprite.vy == 0) {    
        game.setGameOverMessage(false, "you CRASHED")
           game.gameOver(false) 
           }
   }
    
})
function loadingMenu () {
    music.play(music.createSong(hex`0078000408010404001c00100500640000041e000004000000000000000000000000000a040004120000000400012408000c00012410001400012406001c00010a006400f40164000004000000000000000000000000000000000212000400080001200c001000012014001800012007001c00020a006400f401640000040000000000000000000000000000000003060018001c00012409010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c8001200000001000106080009000106100011000106`), music.PlaybackMode.LoopingInBackground)
    light2 = sprites.create(img`
        ........bbbbbbbb
        ........b......b
        ........b......b
        .......2b......b
        .......2b......b
        .......2b......b
        ........b......b
        ........b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        ........b......b
        ........b......b
        ........b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        ........b......b
        ........b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        ........b......b
        ........b......b
        ........b......b
        ........bbbbbbbb
        `, SpriteKind.Player)
    car1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 4 2 2 2 2 2 2 c 2 . . . 
        . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
        . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
        . 2 c 2 e e e e e e e b c 4 2 2 
        . 2 2 e b b e b b b e e b 4 2 2 
        . 2 e b b b e b b b b e 2 2 2 2 
        . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
        . e e e e e e f e e e f e 2 d d 
        . e e e e e e f e e f e e e 2 d 
        . e e e e e e f f f e e e e e e 
        . e f f f f e e e e f f f e e e 
        . . f f f f f e e f f f f f e . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    car2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 6 6 6 6 6 6 6 6 . . . . 
        . . . 6 9 6 6 6 6 6 6 c 6 . . . 
        . . 6 c 9 6 6 6 6 6 6 c c 6 . . 
        . 6 c c 9 9 9 9 9 9 6 c c 9 6 d 
        . 6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
        . 6 6 8 b b 8 b b b 8 8 b 9 6 6 
        . 6 8 b b b 8 b b b b 8 6 6 6 6 
        . 8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
        . 8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
        . 8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
        . 8 8 8 8 8 8 f f f 8 8 8 8 8 8 
        . 8 f f f f 8 8 8 8 f f f 8 8 8 
        . . f f f f f 8 8 f f f f f 8 . 
        . . . f f f . . . . f f f f . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    animation.runImageAnimation(
    light2,
    [img`
        .......bbbbbbbb.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......bbbbbbbb.
        `,img`
        .......bbbbbbbb.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......bbbbbbbb.
        `,img`
        .......bbbbbbbb.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......bbbbbbbb.
        `,img`
        .......bbbbbbbb.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......bbbbbbbb.
        `,img`
        .......bbbbbbbb.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......bbbbbbbb.
        `],
    500,
    false
    )
    car1.x = 16
    car2.x = 16
    car2.y += 16
    light2.z = 2
        timer.after(500 * 5, function () {
            car1.sayText("GO!", 500, true)
            car1.ax = 100
            car2.sayText("GO!", 500, true)
            car2.ax = 100
            textSprite = textsprite.create("racers!")
            textSprite.setPosition(72, 27)
            textSprite.ax = 10
            timer.after(500, function () {
                sprites.destroy(car1)
                sprites.destroy(light2)
                sprites.destroy(car2)
                sprites.destroy(textSprite)
                music.stopAllSounds()
                d = true
            })
        })
    pauseUntil(() => d)
    
   
}
loadingMenu()
let textSprite: TextSprite = null
let car2: Sprite = null
let car1: Sprite = null
let light2: Sprite = null
let counter = 0
let besttime = 0
let v = false
let mySprite: Sprite = null
let d = false
d = false
light2 = sprites.create(img`
        ........bbbbbbbb
        ........b......b
        ........b......b
        .......2b......b
        .......2b......b
        .......2b......b
        ........b......b
        ........b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        ........b......b
        ........b......b
        ........b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        ........b......b
        ........b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        .......2b......b
        ........b......b
        ........b......b
        ........b......b
        ........bbbbbbbb
        `, SpriteKind.Player)
light2.x = 80 + 15
animation.runImageAnimation(
    light2,
    [img`
        .......bbbbbbbb.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......bbbbbbbb.
        `, img`
        .......bbbbbbbb.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......bbbbbbbb.
        `, img`
        .......bbbbbbbb.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......bbbbbbbb.
        `, img`
        .......bbbbbbbb.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        ......2b......b.
        .......bbbbbbbb.
        `, img`
        .......bbbbbbbb.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......b......b.
        .......b......b.
        .......b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        ......7b......b.
        .......bbbbbbbb.
        `],
    500,
    false
)

let m2 = 0
if (game.ask("16x16")) {
    tiles.setCurrentTilemap(tilemap`level2`)
} else if (game.ask("32x32")) {
    m2 = 1
    tiles.setCurrentTilemap(tilemap`level3`)
} else {
    throw "no map selected"
}
let fakesprite:Sprite = null
fakesprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
if (!(blockSettings.exists("bestscore") || blockSettings.exists("bestscore2"))) {
    game.showLongText("No game data saved.", DialogLayout.Bottom)
    game.showLongText("using defults", DialogLayout.Bottom)
}
timer.after(500 * 5, function () {
    sprites.destroy(fakesprite)
    mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)

    mySprite.vx = 130
    scene.cameraFollowSprite(mySprite)
    v = false
    let textSprite2 = textsprite.create("", 14, 1)
    textSprite2.setPosition(0, 23)
    textSprite2.setFlag(SpriteFlag.RelativeToCamera, true)
    if (blockSettings.exists("bestscore")&&!(m2==1)) {
        besttime = blockSettings.readNumber("bestscore")
    } else if (!(m2==1)) {
        besttime = 999999
    } else if (blockSettings.exists("bestscore2")) {
        besttime = blockSettings.readNumber("bestscore2")
    } else {
        besttime = 999999
    }
    game.onUpdate(function () {
        textSprite2.setText("time:" + convertToText(counter).substr(0, 3) + " best time:" + convertToText(besttime).substr(0, 3))
    })
    game.onUpdateInterval(100, function () {
        counter += 0.1
    })

})
