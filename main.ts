basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 1) {
        led.plot(0, 0)
    } else {
        led.unplot(0, 0)
    }
    if (pins.digitalReadPin(DigitalPin.P8) == 1) {
        led.plot(4, 0)
    } else {
        led.unplot(4, 0)
    }
})
