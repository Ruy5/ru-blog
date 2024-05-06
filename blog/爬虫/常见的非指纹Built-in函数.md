# 常见的非指纹Built-in函数


## unescape  用于解码

```js
t = unescape('Hello%20World%21')
console.log(t)

// 结果: Hello World!
```

## Function 函数实例化方法

```js
var fun = Function("a", "return a")
/** 他等价于
function fun(a){
    return a
}
**/
console.log(fun("hello world"))

// 结果: hello world
```

## eval 将字符串当作js去执行

```js
eval('debugger;console.log("hello world")')

// 结果：hello world
```

## Array 用于创建一个数组

```js
console.log(Array())

// 结果：[]
```

## Object 万物皆对象

```js
console.log(Object())
console.log(Object("123"))  // 等价于 new String("123")
console.log(Object(123))    // 等价于 new Number(123)

// 结果：{}
// 结果：[String: '123']
// 结果：[Number: 123]
```

## Date 时间相关

```js
console.log(Date())       // 返回一个事件字符串
console.log(new Date())   // 返回一个事件对象

// 结果：Sat Sep 03 2022 00:51:12 GMT+0800 (中国标准时间)
// 结果：2022-09-02T16:51:12.996Z
```

## RegExp 正则

```js
var re = new RegExp("hello (.*)")
res = re.exec("hello world")
console.log(res)

/** 结果
[
  'hello world',
  'world',
  index: 0,
  input: 'hello world',
  groups: undefined
]
**/
```

## indexOf 数组中的索引

```js
var arr = [1, 2, 8, 6]
console.log(arr.indexOf(8))

// 结果： 2
```

## hasOwnProperty 检查是否是自有属性

```js
function F(){
    this.name = "自有属性"
}
F.prototype.name = "继承属性"

var f = new F()
res = f.hasOwnProperty("name")
console.log(res)

// 结果：true
```

在反爬中，常用来检测方法是否被改变

## encodeURI decodeURIComponent 对URL编码解码

```js
var url1 = encodeURI("http://hello world")
console.log(url1)
var url2 = decodeURIComponent(url1)
console.log(url2)

// 结果：http://hello%20world
// 结果：http://hello world
```

## Math 数学相关

```js
var num = Math.random()  // 比如获取一个随机数
console.log(num)

// 结果： 0.42009787222860195
```

## parseInt parseFloat 强转相关

```js
var num1 = parseInt("12.55")
var num2 = parseFloat("12.55")
console.log(num1)
console.log(num2)

// 结果： 12
// 结果： 12.55
```

## push pop unshift concat slice 数组操作

```js
var arr = []
arr.push(4)  // 数组后方添加元素 返回值是数组长度
arr.push(5)
arr.unshift("b")  // 数组前方添加元素
arr.pop()  // 数组后方删除元素 返回值是被删除的元素
arr_sum = arr.concat([1, 2, 3], [0, 0])  // 数组合并
arr_slc = arr.slice(0 ,1)  // 截取指定数组
```

## split join substr substring 字符串操作

```js
var str = "1-2-3"
var str_split = str.split("-")  // 按 - 分割字符串
var str_join = str_split.join("*")  // 将数组 用 * 拼接为字符串
var str_sub1 = str_join.substring(1, 4)  // 截取字符串
var str_sub2 = str_join.substr(1, 4)  // 抽取字符串
```

## fromCharCode charCodeAt Ascli码操作

```js
var t = "1".charCodeAt()
var s = String.fromCharCode(t)

String.fromCharCode(...[101, 118, 97, 108, 40, 41])  // 其实是 eval()
```

## setTimeout setInterval clearTimeout clearInterval 定时器

```js
setTimeout(()=>{
    console.log(123)
}, 200)

setInterval(()=>{
    console.log(123)
}, 200)
clearTimeout()
clearInterval()
```