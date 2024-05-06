# Hook技术

## 简介

Hook技术又叫钩子函数，在系统没有调用该函数前，钩子程序就先捕获该消息，钩子函数先得到控制权，这时钩子函数既可以加工处理（改变）该函数的执行行为，还可以强制结束消息的传递。简单来说，就是把系统的程序拉出来变成我们自己执行代码片段。

## 为什么能实现hook

客户端拥有js的最高解释权，可以决定在任何时候注入js而服务器无法左右，只能通过监测和混淆手段令hook难度加大，但是却无法阻止。

## 公式

函数Hook公式

```js
func_ = func

func = function (argument){
    my task;
    return func_.apply(argument)
}
// 修改原型方法 伪造没有被hook的痕迹
func.prototype... = ...
```

对象中属性Hook公式

```js
attr_ = obj.attr
Object.defineProperty(obj, 'attr', {
    get: function (){
        console.log(cookie_cache);
        return attr_
    },
    set: function (val){
        return ...
    } 
})
```

## Hook的缺陷

函数hook一般情况下不会出现hook失败的情况，只有可能是 __ proto __ 模拟的不好导致被监测到了。

属性hook当所有网站的逻辑都采用Object.definePreperty绑定后，属性hook就会失败，暂时没有好的解决方法