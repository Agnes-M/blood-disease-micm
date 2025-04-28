// 基本交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 响应式导航
    const navToggle = document.createElement('button');
    navToggle.classList.add('nav-toggle');
    navToggle.innerHTML = '&#9776;';
    
    const nav = document.querySelector('nav .container');
    if (nav) {
        nav.prepend(navToggle);
        
        navToggle.addEventListener('click', function() {
            const navUl = nav.querySelector('ul');
            if (navUl) {
                navUl.classList.toggle('show');
            }
        });
    }

    // 疾病导航固定
    const diseaseNav = document.querySelector('.disease-nav');
    if (diseaseNav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                diseaseNav.classList.add('fixed');
            } else {
                diseaseNav.classList.remove('fixed');
            }
        });
    }

    // 高亮当前导航项
    const currentPath = window.location.pathname;
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active');
        }
    });

    // 表格响应式处理
    document.querySelectorAll('table').forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('table-responsive');
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
});
