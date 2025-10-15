const btns = document.querySelectorAll(".tab-btn");
// console.log(btns)
const contents = document.querySelectorAll(".tab-content");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;
    console.log(target)
    btns.forEach((button) => {
      button.classList.remove("active");
    });
    //  1️⃣ 移除所有按钮的 active 类
    // btns.forEach(btn => btn.classList.remove("active"));
    btn.classList.add("active");

    contents.forEach(content=>{content.classList.remove('active')})
    // document.getElementById(target).classList.add("active");
    document.querySelector(`#${target}`).classList.add('active')
  });
});
