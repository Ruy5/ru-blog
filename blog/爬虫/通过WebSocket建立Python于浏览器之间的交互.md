# 通过WebSocket建立Python于浏览器之间的交互

## WebSocket 服务端

### node.js

```js
// npm install nodejs-websocket
var ws = require("nodejs-websocket")

console.log("开始建立链接...")

var cached = [

]

var server = ws.createServer(function (conn) {
    conn.on("text", function (msg) {
        var key = conn.key;
        console.log("将要发送代码：【 " + msg + " 】至浏览器/python");
        server.connections.forEach(conn=>{
            conn.send(msg);
        })
    })
    conn.on("close", function (code, reason) {

    })
    conn.on("error", function (code, reason) {

    })

}).listen(8015)

console.log("websocket 建立完毕")
```

## 浏览器向Python发送消息

### 浏览器

```js
(function () {
  if(window.WebSocket){
    ws = new WebSocket("ws://127.0.0.1:8015/");
    ws.onopen = function (e) {
      
    }
    ws.onclose = function (e) {
      console.log("服务器关闭");
    }
    ws.onerror = function (e) {
      console.log("链接出错");
    }
    ws.onmessage = function (e) {
      console.log("发送/接受：" + e);
    }
  }
})();
```

### python

```js
# pip install websocket-client 
# pip install websocket
import websocket

ws = websocket.WebSocketApp("ws://127.0.0.1:8015")

# 接收 传过来的值
def on_message(ws, message):
    if message.split('_')[0] != " js":
        print(message)


ws.on_message = on_message
ws.run_forever()
```

## Python向浏览器发送消息

### 浏览器

```js
(function () {
  if(window.WebSocket){
    ws = new WebSocket("ws://127.0.0.1:8015/");
    ws.onopen = function (e) {
      
    }
    ws.onclose = function (e) {
      console.log("服务器关闭");
    }
    ws.onerror = function (e) {
      console.log("链接出错");
    }
    ws.onmessage = function (e) {
      console.log("发送/接受：" + e);
    }
  }
})();
```

### python

```python
import websocket
ws = websocket.WebSocket()
ws.connect("ws://127.0.0.1:8015")
ws.send('js_console.log("链接成功")')
```

