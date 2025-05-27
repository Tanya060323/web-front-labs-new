document.addEventListener('DOMContentLoaded', function() {
    const currentPageUrl = window.location.pathname.split('/').pop();
    
    const menuLinks = document.querySelectorAll('.main-menu a');
    
    menuLinks.forEach(link => {
        const linkUrl = link.getAttribute('href');
        
        if (linkUrl === currentPageUrl) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('backToTop');
            
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
            
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

