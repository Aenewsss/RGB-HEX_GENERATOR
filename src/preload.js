const { Titlebar, Color } = require('custom-electron-titlebar') 


window.addEventListener('DOMContentLoaded', () => {
    new Titlebar({
        backgroundColor: Color.fromHex('#1d0929'),
        titleHorizontalAlignment: 'left',
        icon: './public/rainbow.ico'
    })

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if(element) element.innerText = text
    }

    for(const type of ['chrome', 'node', 'electron']){
        replaceText(`${type}-version`, process.versions[type])
    }
})

