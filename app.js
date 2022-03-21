const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path')
const { setupTitlebar, attachTitlebarToWindow } = require('custom-electron-titlebar/main')

setupTitlebar()

let window = null

const createWindow = () => {
    window = new BrowserWindow({
        minHeight: 600,
        minWidth: 400,
        width: 800,
        height: 600,
        show: false,
        autoHideMenuBar: true,
        frame: false,
        icon: './public/rainbow.png',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: path.join(__dirname, './src/preload.js')
        }
    })

    Menu.setApplicationMenu(null)

    window.loadFile('./index.html')


    attachTitlebarToWindow(window)

    window.once('ready-to-show', () => {
        window.show()
    })
}

app.whenReady().then(() => {
    console.log('App started')
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
