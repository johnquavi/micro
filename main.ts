let rps = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("hi ")
})
input.onButtonPressed(Button.AB, function () {
    rps = randint(1, 3)
    if (rps == 1) {
        basic.showString("1")
    } else if (rps == 2) {
        basic.showString("2")
    } else if (rps == 3) {
        basic.showString("3")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    rps = randint(1, 2)
    if (rps == 1) {
        basic.showString("tails ")
    } else if (rps == 2) {
        basic.showString("heads")
    }
})
