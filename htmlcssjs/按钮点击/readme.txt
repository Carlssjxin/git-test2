# 按钮点击切换主题颜色（HTML + CSS + JS）

本示例实现了一个简单的主题切换功能，
点击按钮可在“浅色主题”和“暗色主题”之间切换。

文件说明：
- index.html ：页面结构（按钮 + 内容）
- style.css  ：样式文件（定义浅色 / 暗色主题）
- script.js  ：逻辑文件（切换主题）

工作原理：
1. 页面默认使用浅色主题（body 类名为 light-theme）。
2. 点击按钮时，JS 检查 body 当前类名。
3. 如果是 light-theme → 改为 dark-theme；
   如果是 dark-theme → 改为 light-theme。
4. 同时更新按钮文字，让用户知道当前状态。

主要知识点：
- classList.add() / remove() / contains() 操作类名
- 事件监听 addEventListener("click", ...)
- CSS transition 动画实现平滑过渡效果
