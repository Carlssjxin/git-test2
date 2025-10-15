const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  const body = document.querySelector("body");
  const islingt = body.classList.contains("light-type");
  if (islingt) {
    body.classList.remove('light-type')
    body.classList.add('dark-type')
    btn.textContent='切换到亮色模式'
  } else {
    body.classList.remove('dark-type')
    body.classList.add('light-type')
    btn.textContent='切换到暗色模式'
  }
});
