// main/app-process.js

const { BrowserWindow } = require("electron");

function createAppWindow() {
  let win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  win.loadFile("./renderers/dashboard.html");
  win.maximize();

  win.on("closed", () => {
    win = null;
  });
}

module.exports = createAppWindow;