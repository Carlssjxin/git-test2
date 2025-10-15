# Tab 切换示例（HTML + CSS + JS）

功能：
- 点击不同标签按钮显示对应内容
- 未选中的标签内容隐藏
- 纯 HTML + CSS + JS 实现，无依赖库

文件说明：
- index.html ：页面结构
- style.css  ：样式文件（按钮样式 + 内容显示隐藏）
- script.js  ：逻辑文件（点击切换 active 类）

核心原理：
1. 每个 Tab 按钮都有 data-tab 属性对应内容 id。
2. 点击按钮时：
   a) 移除所有按钮 active 类
   b) 给点击的按钮添加 active 类
   c) 隐藏所有 tab-content
   d) 显示对应 tab-content
3. CSS 使用 .active 控制显示和按钮样式。
