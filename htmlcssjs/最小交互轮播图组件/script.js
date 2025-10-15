// 获取所有图片元素
const slides = document.querySelectorAll(".slide");

// 获取左右按钮
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// 获取指示点
const dots = document.querySelectorAll(".dot");

// 当前显示图片索引
let currentIndex = 0;

// 自动轮播时间间隔
let interval = 3000; // 3秒

// 显示指定索引的图片
function showSlide(index) {
  // 处理边界
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;
  currentIndex = index;

  // 隐藏所有图片
  slides.forEach(slide => slide.classList.remove("active"));
  // 移除所有点的高亮
  dots.forEach(dot => dot.classList.remove("active"));

  // 显示当前图片
  slides[currentIndex].classList.add("active");
  // 高亮对应指示点
  dots[currentIndex].classList.add("active");
}

// 左右按钮点击事件
prevBtn.addEventListener("click", () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  showSlide(currentIndex + 1);
});

// 指示点点击事件
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    const index = parseInt(dot.dataset.index);
    console.log(index)
    showSlide(index);
  });
});

// 自动轮播函数
function autoPlay() {
  showSlide(currentIndex + 1);
}

// 启动自动轮播
let timer = setInterval(autoPlay, interval);

// 鼠标悬停停止自动播放
const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => clearInterval(timer));
carousel.addEventListener("mouseleave", () => timer = setInterval(autoPlay, interval));
