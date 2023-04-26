radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function forkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 2)
}
function backward () {
    wuKong.setAllMotor(-20, -20)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
function forkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(19)
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.sendNumber(7)
    } else {
        radio.sendNumber(0)
    }
})
basic.forever(function () {
    if (action == 1) {
        forward()
    }
    if (action == 2) {
        backward()
    }
    if (action == 6) {
        forkUp()
    }
    if (action == 7) {
        forkDown()
    }
    if (action == 0) {
        wuKong.stopAllMotor()
    }
})
