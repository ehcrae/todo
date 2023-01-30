const {app, BrowserWindow } = require('electron');
const { menubar } = require('menubar');
const settings = require("./settings");



// menubar window process
function createWindow () {
  const windowWidth = settings.get("windowWidth");
  const windowHeight = settings.get("windowHeight");

  const mb = new menubar({
    browserWindow: { width: windowWidth, height: windowHeight },
    icon: "./icons/icon.png"
  })
}

app.whenReady().then(() => {
  createWindow();
});