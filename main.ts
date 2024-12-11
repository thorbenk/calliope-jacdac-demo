input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    knopf_a_zahl = (knopf_a_zahl + 1) % 4
})
function farbering () {
    farbe = neopixel.hsl(farbe_zahl, 99, 50)
}
modules.potentiometer1.onPositionChangedBy(1, function () {
    geschwindigkeit = modules.potentiometer1.position()
})
modules.button4.onEvent(jacdac.ButtonEvent.Down, function () {
    if (knopf == 0) {
        richtung = 1
        knopf = 1
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        richtung = 7
        knopf = 0
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
modules.rotaryEncoder2.onPositionChanged(function (delta) {
    if (delta < 0) {
        farbe_zahl = Math.abs(360 - Math.abs(delta))
    } else {
        farbe_zahl = (farbe_zahl + delta) % 360
    }
    basic.showNumber(delta)
})
let farbe = 0
let knopf_a_zahl = 0
let farbe_zahl = 0
let knopf = 0
let richtung = 0
let geschwindigkeit = 0
geschwindigkeit = 50
richtung = 1
let Index = 0
knopf = 1
farbe_zahl = 0
basic.forever(function () {
    while (true) {
        Index = (Index + richtung) % 8
        modules.led1.setAll(0x000000)
        farbering()
        modules.led1.setPixelColor(Index, farbe)
        basic.pause(20 + 10 * geschwindigkeit)
    }
})
basic.forever(function () {
	
})
