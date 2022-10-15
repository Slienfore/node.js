// 由于配置了 package.json 文件, node 将会检索文件
const TOOL = require('../tools')

console.log(TOOL.format(new Date()))

const str = '<h1 title="Slienfore">进行转义 html 标签<span>Hello &nbsp;</span></h1>'

// &lt;h1 title=&quot;Slienfore&quot;&gt;进行转义 html 标签&lt;span&gt;Hello &amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(TOOL.htmlEscape(str))

// <h1 title="Slienfore">进行转义 html 标签<span>Hello &nbsp;</span></h1>
console.log(TOOL.htmlUnEscape(TOOL.htmlEscape(str)))