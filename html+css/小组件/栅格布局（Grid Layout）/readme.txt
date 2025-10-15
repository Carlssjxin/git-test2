# 栅格布局（Grid Layout）练习（HTML + CSS）

本示例展示两种常见的网页栅格布局：
- 三栏等宽布局
- 四栏不等宽布局

文件说明：
- index.html ：页面结构文件
- style.css  ：样式文件
- README.txt ：说明文件

功能特性：
1. 使用 CSS Grid 实现行列布局。
2. 三栏布局使用 `repeat(3, 1fr)` 等分列宽。
3. 四栏布局使用 `2fr 1fr 1fr 0.5fr` 体现不等宽效果。
4. 每个栅格项带圆角、阴影与 hover 动画。
5. 布局间有统一间距（gap: 16px）。

使用方法：
1. 将三个文件放在同一文件夹。
2. 打开 index.html，即可在浏览器中查看效果。
3. 可修改 `grid-template-columns` 值自定义列数与宽度比例。

示例扩展：
- 可添加 `grid-template-rows` 控制行高。
- 可通过 `@media` 实现响应式自适应布局。
