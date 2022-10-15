## 安装

```
npm install Slienfore-tools
```

## 导入

```js
const slienfore = require('Slienfore-tools')
```

## 格式化时间

```js
const date = slienfore.format(new Date())
console.log(date)
```

## 转义 HTML 中特殊字符

```js
const str = '<h1 title="Slienfore">进行转义 html 标签<span>Hello &nbsp;</span></h1>'
const res = slienfore.htmlEscape(str)
console.log(str)
```

## 还原 HTML 特殊字符

```js
const str = '&lt;h1 title=&quot;Slienfore&quot;&gt;进行转义 html 标签&lt;span&gt;Hello &amp;nbsp;&lt;/span&gt;&lt;/h1&gt;'
const res = slienfore.htmlUnEscape(str)
console.log(res)
```

## 开源协议
ISC