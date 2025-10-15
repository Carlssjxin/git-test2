const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

let interval = 3000;
// 显示指定索引的图片
function bianjie(index) {
  if (index >= slides.length) {
    index = 0;
  }
  if (index < 0) {
    index = 2;
  }
  currentIndex = index;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));
  slides[currentIndex].classList.add("active");
  dots[currentIndex].classList.add("active");
}
// 左右按钮点击事件
prev.addEventListener("click", () => {
  bianjie(currentIndex - 1);
});
next.addEventListener("click", () => {
  bianjie(currentIndex + 1);
});

// 指示点点击事件
dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const index = dot.dataset.index;
    console.log(index);
    bianjie(index);
  });
});

// 自动轮播函数
function autoPlay(){
  bianjie(currentIndex+1)
}
// 启动自动轮播
let timer =setInterval(autoPlay,interval)

// 鼠标悬停停止自动播放
const a =document.querySelector('.carousel')
a.addEventListener('mouseenter',()=>clearInterval(timer))
a.addEventListener('mouseleave',()=>{timer =setInterval(autoPlay,interval) })