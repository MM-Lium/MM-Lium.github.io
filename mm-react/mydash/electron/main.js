import { app, BrowserWindow } from 'electron';
import path from 'path';

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  win.loadURL('http://localhost:5173') // 開發階段連 Vite Dev Server
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// 區塊	說明
// loadURL('http://localhost:5173')	開發模式中，Electron 要去載入 Vite 的 Dev Server
// contextIsolation: true	加強安全性，防止 preload 注入干擾（推薦）
// nodeIntegration: false	不建議在 renderer 使用 Node.js 功能，與 React 隔離
// app.on('window-all-closed')	為了 macOS 正常關閉行為設定
// app.on('activate')	為 macOS 保留 activate 行為