# Stream Dock Demo Plugin

## Feature / 功能

### English
This plugin demonstrates how to execute PowerShell commands using Node.js directly within a Stream Dock plugin.
- **Interaction**: When the button is pressed (`keyUp` event), the plugin triggers a PowerShell command.
- **Command**: It executes `$env:USERNAME` to retrieve the current Windows user's name.
- **Feedback**: The retrieved username is displayed as the title of the button on the Stream Dock device.

### 中文
此插件演示如何使用 Node.js 在 Stream Dock 插件中執行 PowerShell 指令。
- **互動**: 當按下按鈕時（`keyUp` 事件），插件會觸發 PowerShell 指令。
- **指令**: 執行 `$env:USERNAME` 以獲取當前 Windows 使用者名稱。
- **反饋**: 獲取到的使用者名稱將顯示在 Stream Dock 設備的按鈕標題上。

## Build & Deploy / 編譯與部署

### Prerequisites / 前置需求
- Node.js (Version 20 is recommended as it's built-in to Stream Dock verify `manifest.json`)
- Stream Dock software verified on 3.10.188.226+

### Build Command / 編譯指令
To build the plugin, navigate to the `plugin` directory and run:
要編譯插件，請進入 `plugin` 目錄並執行：

```bash
cd plugin
npm run build
```

This command uses `ncc` to bundle the project into a single executable file in the `build` folder.
此指令使用 `ncc` 將專案打包成 `build` 資料夾中的單個可執行文件。

### Auto-Deployment / 自動部署
The `npm run build` command automatically executes `autofile.js` after compilation. This script performs the following:
`npm run build` 指令在編譯後會自動執行 `autofile.js`。此腳本執行以下操作：

1.  **Deletes old files**: Removes the existing plugin directory from the Stream Dock plugins folder (`%APPDATA%\HotSpot\StreamDock\plugins`).
    **刪除舊文件**: 從 Stream Dock 插件資料夾 (`%APPDATA%\HotSpot\StreamDock\plugins`) 中刪除現有的插件目錄。
2.  **Copies new files**: Copies the updated plugin code and assets to the installation directory.
    **複製新文件**: 將更新後的插件代碼和資源複製到安裝目錄。

> [!IMPORTANT]
> **File Locks / 文件鎖定**: If Stream Dock is running, it may lock the plugin files, causing the deployment to fail (EPERM error). Please **close Stream Dock** before running the build command.
> **注意**: 如果 Stream Dock 正在運行，它可能會鎖定插件文件，導致部署失敗（EPERM 錯誤）。請在執行編譯指令前**關閉 Stream Dock**。

## References / 參考資料

For details, please see / 更多詳情請參閱:

- [Events Received](https://sdk.key123.vip/en/guide/events-received.html)
- [Events Sent](https://sdk.key123.vip/en/guide/events-sent.html)
- [Manifest Node.js](https://sdk.key123.vip/en/guide/manifest.html#nodejs)

## Precautions

Windows: The software version needs to be `3.10.188.226` or above. Starting from `3.10.188.226`, the software has a built-in node module, and the built-in node version is `20.8.1`. Set Version in manifest to `20`. Other versions are not built-in yet.

Mac: `3.10.189.0313` is not built-in yet, and you need to wait for the next version.