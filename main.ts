function 燈數 (num: number) {
    if (num % 5 == 0) {
        x = 4
        y = Math.floor(num / 5) - 1
    } else {
        x = num % 5 - 1
        y = Math.floor(num / 5)
    }
    led.plot(x, y)
}
input.onButtonPressed(Button.A, function () {
    z += 1
    if (z > 25) {
        z = 25
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(0)
    }
    n = 0
    while (n < z) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = 1
            n += 1
            燈數(a + 1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    z += -1
    if (z < 0) {
        z = 0
    }
})
let a = 0
let n = 0
let list: number[] = []
let y = 0
let x = 0
let z = 0
z = 0
