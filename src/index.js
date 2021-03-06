//"const" for unchanging variables, "let" for ones that change
const {app, BrowserWindow} = require('electron');

const path = require('path');
const url = require('url');

let mainWindow;

function createWindow(){
    //create browser window
    mainWindow = new BrowserWindow({width: 800, height: 600});

    //load the index.html file
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    //Open dev tools
    mainWindow.webContents.openDevTools();
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
})