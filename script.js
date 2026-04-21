document.addEventListener('DOMContentLoaded', () => {
    // --------------------------------------------------------
    // Menu Category Filtering
    // --------------------------------------------------------
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.dish-card');
    const noResults = document.getElementById('no-results');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');
            let visibleCount = 0;

            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                // Smooth fade transition
                item.style.opacity = '0';
                
                setTimeout(() => {
                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.classList.remove('hidden-item');
                        void item.offsetWidth; // Trigger reflow
                        item.style.opacity = '1';
                        visibleCount++;
                    } else {
                        item.classList.add('hidden-item');
                    }
                    
                    // Show/Hide "No Results" message
                    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
                }, 200); // Faster transition for "simpler" feel
            });
        });
    });

    // --------------------------------------------------------
    // Scroll Reveal Animation (Intersection Observer)
    // --------------------------------------------------------
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Also trigger initial reveal for elements that might be at the top
    setTimeout(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) {
                el.classList.add('active');
            }
        });
    }, 100);
});
