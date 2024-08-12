// src/main/preload.js

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('myAPI', {
  sendMessage: (message) => ipcRenderer.send('message-channel', message),
  onMessage: (callback) => ipcRenderer.on('message-channel', (event, ...args) => callback(...args)),
});
