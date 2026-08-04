document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const viewPanels = document.querySelectorAll('.view-panel');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // 1. Remove active markers from existing nav state
            navItems.forEach(nav => nav.classList.remove('active'));
            viewPanels.forEach(panel => panel.classList.remove('active'));

            // 2. Set active state to current selected navigation item
            item.classList.add('active');
            
            // 3. Find and display the corresponding sub-page panel
            const targetId = item.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            
            if (targetPanel) {
                targetPanel.classList.add('active');
            }
        });
    });
});
