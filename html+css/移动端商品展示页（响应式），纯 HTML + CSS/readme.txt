# 移动端商品展示页（响应式 HTML + CSS）

本示例展示一个响应式商品列表页面，支持手机、平板和桌面浏览。

文件说明：
- index.html ：HTML 页面结构
- style.css  ：CSS 样式文件
- README.txt ：说明文件

功能特性：
1. 商品以卡片形式展示：图片 + 标题 + 价格 + 购买按钮。
2. 网格布局：使用 CSS Grid 实现自适应。
   - 手机：1 列
   - 平板：2 列
   - 桌面：3 列
3. 卡片带圆角、阴影和悬停动画。
4. 按钮有悬停效果，交互友好。
5. 页面整体居中，内边距保证手机端不贴边。

使用方法：
1. 创建 `images/` 文件夹，放入对应商品图片：
   - product1.jpg
   - product2.jpg
   - product3.jpg
   - product4.jpg
2. 打开 index.html，在浏览器查看响应式效果。
3. 可根据实际商品数量复制 `.product-card` 模块。
