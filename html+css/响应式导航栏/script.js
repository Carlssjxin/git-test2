// 汉堡菜单交互
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// 点击菜单项后关闭移动端菜单
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// 滚动时导航栏效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 5%';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.padding = '15px 5%';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});
