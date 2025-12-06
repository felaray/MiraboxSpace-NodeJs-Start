const { Plugins, Actions, log, EventEmitter } = require('./utils/plugin');
const { exec } = require('child_process');

const plugin = new Plugins('demo');


plugin.didReceiveGlobalSettings = ({ payload: { settings } }) => {
    log.info('didReceiveGlobalSettings', settings);
};



plugin.demo = new Actions({
    default: {},
    async _willAppear({ context, payload }) {
        log.info("demo: willAppear", context);
    },
    _willDisappear({ context }) {
        log.info('willDisAppear', context)
    },
    _propertyInspectorDidAppear({ context }) {
    },
    sendToPlugin({ payload, context }) {
    },
    keyUp({ context, payload }) {
        log.info('keyUp', context);
        // 执行 PowerShell 命令获取用户名
        exec('powershell -Command "$env:USERNAME"', { encoding: 'utf8' }, (error, stdout, stderr) => {
            if (error) {
                log.error(`exec error: ${error}`);
                plugin.setTitle(context, "Error");
                return;
            }
            const username = stdout.trim();
            log.info(`PowerShell output: ${username}`);
            // 显示用户名
            plugin.setTitle(context, username);
        });
    },
    dialDown({ context, payload }) { },
    dialRotate({ context, payload }) { }
});