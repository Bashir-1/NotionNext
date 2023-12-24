// 这里编写自定义js脚本；将被静态引入到页面中


// 查找头部
var head = document.head || document.getElementsByTagName('head')[0];

// 创建meta标签
var meta = document.createElement('meta');

// 设置meta标签的属性
meta.name = 'referrer';
meta.content = 'never';

// 将meta标签添加到头部
head.appendChild(meta);
