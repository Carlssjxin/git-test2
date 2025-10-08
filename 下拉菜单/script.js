// 当DOM内容完全加载后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取下拉按钮元素
    const dropdownBtn = document.querySelector('.dropdown-btn');
    // 获取下拉菜单内容元素
    const dropdownContent = document.querySelector('.dropdown-content');
    // 获取下拉按钮中的图标元素
    const dropdownIcon = dropdownBtn.querySelector('i');
    
    // 为下拉按钮添加点击事件监听器
    dropdownBtn.addEventListener('click', function(e) {
        // 阻止事件冒泡，防止触发文档点击事件
        e.stopPropagation();
        // 切换下拉菜单的激活状态（显示/隐藏）
        dropdownContent.classList.toggle('active');
        
        // 根据下拉菜单状态更新图标
        if (dropdownContent.classList.contains('active')) {
            // 如果菜单已激活，将图标更改为向上箭头
            dropdownIcon.classList.remove('fa-chevron-down');
            dropdownIcon.classList.add('fa-chevron-up');
        } else {
            // 如果菜单未激活，将图标恢复为向下箭头
            dropdownIcon.classList.remove('fa-chevron-up');
            dropdownIcon.classList.add('fa-chevron-down');
        }
    });
    
    // 获取所有下拉菜单项元素
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    
    // 为每个菜单项添加点击事件监听器
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            // 获取当前菜单项的文本内容
            const text = this.querySelector('span').textContent;
            // 将下拉按钮的文本更新为当前选择的菜单项文本
            dropdownBtn.querySelector('span').textContent = text;
            // 关闭下拉菜单
            dropdownContent.classList.remove('active');
            // 将图标恢复为向下箭头
            dropdownIcon.classList.remove('fa-chevron-up');
            dropdownIcon.classList.add('fa-chevron-down');
        });
    });
    
    // 为整个文档添加点击事件监听器
    document.addEventListener('click', function() {
        // 关闭下拉菜单
        dropdownContent.classList.remove('active');
        // 将图标恢复为向下箭头
        dropdownIcon.classList.remove('fa-chevron-up');
        dropdownIcon.classList.add('fa-chevron-down');
    });
    
    // 为窗口添加滚动事件监听器
    window.addEventListener('scroll', function() {
        // 关闭下拉菜单
        dropdownContent.classList.remove('active');
        // 将图标恢复为向下箭头
        dropdownIcon.classList.remove('fa-chevron-up');
        dropdownIcon.classList.add('fa-chevron-down');
    });
});