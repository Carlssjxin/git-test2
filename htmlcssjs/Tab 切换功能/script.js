// 获取所有 Tab 按钮
const tabButtons = document.querySelectorAll(".tab-btn");
// console.log(tabButtons)

// 获取所有 Tab 内容
const tabContents = document.querySelectorAll(".tab-content");

// 遍历每个按钮，为其绑定点击事件
tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = button.dataset.tab; // 获取按钮对应的 tab id

    // 1️⃣ 移除所有按钮的 active 类
    tabButtons.forEach(btn => btn.classList.remove("active"));

    // 2️⃣ 给当前点击的按钮添加 active 类
    button.classList.add("active");

    // 3️⃣ 隐藏所有内容
    tabContents.forEach(content => content.classList.remove("active"));

    // 4️⃣ 显示对应内容
    document.getElementById(target).classList.add("active");
  });
});
