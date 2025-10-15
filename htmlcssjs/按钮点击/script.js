// 获取页面中的按钮元素
// const toggleButton = document.getElementById("theme-toggle");
const toggleButton =document.querySelector('#theme-toggle');
// 为按钮绑定点击事件
toggleButton.addEventListener("click", function() {
  // 获取当前 <body> 元素
  const body = document.body;

  // 判断当前是否是浅色主题
  const isLight = body.classList.contains("light-theme");

  if (isLight) {
    // 如果当前是浅色，则切换为暗色主题
    body.classList.remove("light-theme");   // 移除浅色主题类
    body.classList.add("dark-theme");       // 添加暗色主题类
    toggleButton.textContent = "切换到浅色模式"; // 更新按钮文字
  } else {
    // 如果当前是暗色，则切换为浅色主题
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    toggleButton.textContent = "切换到暗色模式";
  }
});
