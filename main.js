const {app, BrowserWindow } = require('electron')
const { menubar } = require('menubar')
const path = require('path')
const Store = require('./store.js')

const store = new Store({
  // We'll call our data file 'user-preferences'
  configName: 'user-preferences',
  defaults: {
    windowBounds: { width: 400, height: 600 },
  }
})


// menubar window process
function createWindow () {
  let width = store.get('width')
  let height = store.get('height')
  console.log(width, height)
  const mb = new menubar({
    browserWindow: { width: width, height: height },
    icon: "./icons/icon.png"
  })
}

app.whenReady().then(() => {
  createWindow();

  //console.log(app.getPath('userData'));
})
