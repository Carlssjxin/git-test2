# 最小轮播图示例（HTML + CSS + JS）

功能：
- 自动切换图片，每3秒轮播一次
- 左右按钮可手动切换图片
- 下方指示点可点击切换
- 鼠标悬停时自动轮播暂停
- 响应式，适合 PC 和移动端

文件说明：
- index.html ：页面结构
- style.css  ：样式文件
- script.js  ：JS 控制逻辑
- images/    ：放置轮播图片

核心知识点：
1. document.querySelector / querySelectorAll 选择 DOM 元素
2. element.classList.add/remove 切换图片显示
3. element.addEventListener 监听用户点击事件
4. setInterval / clearInterval 实现自动轮播
5. dataset 获取自定义属性 data-index
