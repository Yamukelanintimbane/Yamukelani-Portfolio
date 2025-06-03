    // Taskbar/Dock functionality
document.addEventListener('DOMContentLoaded', function() {
    const dockItems = document.querySelectorAll('.dock-item');
    const dockContainer = document.querySelector('.dock-container');
    
    // Set active item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    dockItems.forEach(item => {
        const href = item.getAttribute('href').split('/').pop();
        if (href === currentPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Dock hover effect
    dockContainer.addEventListener('mouseenter', () => {
        dockContainer.style.height = '70px';
        dockContainer.style.padding = '12px';
    });
    
    dockContainer.addEventListener('mouseleave', () => {
        dockContainer.style.height = '60px';
        dockContainer.style.padding = '8px';
    });
    
    // Magnify adjacent icons on hover (like macOS)
    dockItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const index = Array.from(dockItems).indexOf(item);
            
            dockItems.forEach((otherItem, otherIndex) => {
                const distance = Math.abs(index - otherIndex);
                if (distance <= 2 && distance > 0) {
                    const scale = 1 + (0.1 / distance);
                    otherItem.style.transform = `scale(${scale}) translateY(-${5 * (1/distance)}px)`;
                }
            });
        });
        
        item.addEventListener('mouseleave', () => {
            dockItems.forEach(otherItem => {
                if (!otherItem.classList.contains('active')) {
                    otherItem.style.transform = 'scale(1) translateY(0)';
                }
            });
        });
    });
});