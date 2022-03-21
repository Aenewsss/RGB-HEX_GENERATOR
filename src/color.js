function verifyBackgroundColor(red, green, blue) {
    if (red <= 127 && green <= 127 && blue <= 127) {
        document.getElementById('rgb-response').style.color = 'white'
        document.getElementById('hex-response').style.color = 'white'
        document.getElementById('main-container').style.color = 'white'
        document.getElementById('main-container').style.borderColor = 'white'
        document.getElementById('title').style.borderColor = 'white'
        document.getElementById('colors').style.borderColor = 'white'
    } else {
        document.getElementById('rgb-response').style.color = 'black'
        document.getElementById('hex-response').style.color = 'black'
        document.getElementById('main-container').style.color = 'black'
        document.getElementById('main-container').style.borderColor = 'black'
        document.getElementById('title').style.borderColor = 'black'
        document.getElementById('colors').style.borderColor = 'black'
    }
}


function verifyInt(num) {
    if (num.length == 4) {
        num = Number(num.replace('.', '').substring(0, 1))
        return num
    } else {
        num = Number(num.replace('.', '').substring(0, 2))
        return num
    }
}

function verifyDec(num) {
    if (num.length == 4) {
        num = Math.round(Number('0.' + (num.replace('.', '').substring(1, 3))) * 16)
        return num
    } else {
        num = Math.round(Number('0.' + (num.replace('.', '').substring(2, 4))) * 16)
        return num
    }
}

function verifyNum(num, type) {
    num = (num / 16).toFixed(2).toString()

    num = type == 'int' ? verifyInt(num) : verifyDec(num)

    switch (num) {
        case 10:
            return 'a'
        case 11:
            return 'b'
        case 12:
            return 'c'
        case 13:
            return 'd'
        case 14:
            return 'e'
        case 15:
            return 'f'
        default:
            return num.toString()
    }
}

function verifyLetter(x) {
    switch (x) {
        case 'a':
            return 10
        case 'b':
            return 11
        case 'c':
            return 12
        case 'd':
            return 13
        case 'e':
            return 14
        case 'f':
            return 15
        default:
            return Number(x)
    }
}

function rgbToHex(red, green, blue) {
    let hexColor = ''

    let first = verifyNum(red, 'int')
    let second = verifyNum(red, 'dec')

    let third = verifyNum(green, 'int')
    let fourth = verifyNum(green, 'dec')

    let fifth = verifyNum(blue, 'int')
    let sixth = verifyNum(blue, 'dec')

    hexColor = '#' + first + second + third + fourth + fifth + sixth
    document.getElementById('hex-response').value = hexColor
}

function changeColor() {
    let red = document.getElementById('red').value
    let green = document.getElementById('green').value
    let blue = document.getElementById('blue').value

    verifyBackgroundColor(red, green, blue)
    rgbToHex(red, green, blue)

    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.body.style.backgroundColor = color
    document.getElementById('rgb-response').value = color
}

function changeHexRange() {
    let hex = document.getElementById('hex-response').value.replace('#', '').split('')
    let hexColor = document.getElementById('hex-response').value

    let first = verifyLetter(hex[0])
    let second = verifyLetter(hex[1])
    let third = verifyLetter(hex[2])
    let fourth = verifyLetter(hex[3])
    let fifth = verifyLetter(hex[4])
    let sixth = verifyLetter(hex[5])

    second = Number((second / 16).toFixed(2))
    fourth = Number((fourth / 16).toFixed(2))
    sixth = Number((sixth / 16).toFixed(2))

    let red = Math.round((first + second) * 16)
    let green = Math.round((third + fourth) * 16)
    let blue = Math.round((fifth + sixth) * 16)

    let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    verifyBackgroundColor(red, green, blue)

    document.getElementById('red').value = red
    document.getElementById('green').value = green
    document.getElementById('blue').value = blue
    document.getElementById('rgb-response').value = rgbColor
    document.body.style.backgroundColor = hexColor
}

function changeRgbRange() {
    let rgb = document.getElementById('rgb-response').value.replace('rgb', '').replace('(', '').replace(')', '').replace(/,/g, ' ').split(' ')

    let red = Number(rgb[0])
    let green = Number(rgb[1])
    let blue = Number(rgb[2])

    verifyBackgroundColor(red, green, blue)

    if (red == '') red = 0
    if (green == '') green = 0
    if (blue == '') blue = 0

    document.getElementById('red').value = red
    document.getElementById('green').value = green
    document.getElementById('blue').value = blue

    let color = 'rgb(' + red + ',' + green + ',' + blue + ')';

    document.body.style.backgroundColor = color

    rgbToHex(red, green, blue)
}

document.getElementById('red').addEventListener('input', () => changeColor())
document.getElementById('green').addEventListener('input', () => changeColor())
document.getElementById('blue').addEventListener('input', () => changeColor())