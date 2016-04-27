var app = require('app');
var BrowserWindow = require('browser-window');
var win = null;

app.on('ready', function() {
  win = new BrowserWindow({
    width: 1300,
    height: 800
  });
  win.loadUrl('file://' + __dirname + '/index.html')
});
