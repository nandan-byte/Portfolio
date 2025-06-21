// document.addEventListener('DOMContentLoaded', function() {
//     // --- Navbar Toggler ---
//     const hamburger = document.querySelector('.hamburger');
//     const ulLinks = document.querySelector('.ul-links'); // Ensure this matches your nav links container class

//     if (hamburger && ulLinks) {
//         hamburger.addEventListener('click', function() {
//             hamburger.classList.toggle('open');
//             ulLinks.classList.toggle('open');
//         });

//         // Close the mobile menu when a link is clicked (for single-page navigation)
//         const links = ulLinks.querySelectorAll('a');
//         links.forEach(link => {
//             link.addEventListener('click', function() {
//                 // Check if the menu is open and if it's a small screen before closing
//                 if (window.innerWidth <= 768 && ulLinks.classList.contains('open')) {
//                     hamburger.classList.remove('open');
//                     ulLinks.classList.remove('open');
//                 }
//             });
//         });
//     }

//     // --- Custom Cursor Logic ---
//     const cursorDot = document.querySelector(".cursor-dot");
//     const cursorOutline = document.querySelector(".cursor-outline");

//     if (cursorDot && cursorOutline) { // Ensure cursor elements exist
//         window.addEventListener("mousemove", function(e) {
//             const posX = e.clientX;
//             const posY = e.clientY;

//             cursorDot.style.left = `${posX}px`;
//             cursorDot.style.top = `${posY}px`;

//             // Use Web Animations API for smoother outline movement
//             cursorOutline.animate({
//                 left: `${posX}px`,
//                 top: `${posY}px`
//             }, { duration: 500, fill: "forwards" }); // Adjust duration for desired smoothness
//         });

//         // Add hover effect for interactive elements
//         document.querySelectorAll('a, button, input[type="submit"], .project-card, .skill-category-card').forEach(el => {
//             el.addEventListener('mouseenter', () => {
//                 cursorOutline.classList.add('hover-active');
//             });
//             el.addEventListener('mouseleave', () => {
//                 cursorOutline.classList.remove('hover-active');
//             });
//         });

//         // Hide custom cursor when mouse leaves the window
//         document.body.addEventListener("mouseleave", () => {
//             cursorDot.style.opacity = "0";
//             cursorOutline.style.opacity = "0";
//         });

//         // Show custom cursor when mouse enters the window
//         document.body.addEventListener("mouseenter", () => {
//             cursorDot.style.opacity = "1";
//             cursorOutline.style.opacity = "1";
//         });
//     }


//     // --- Scroll Fade-in Animation for Sections (from your existing code) ---
//     const sections = document.querySelectorAll('.section');

//     const observerOptions = {
//         root: null, // viewport
//         rootMargin: '0px',
//         threshold: 0.1 // 10% of the section must be visible
//     };

//     const sectionObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('fade-in');
//                 observer.unobserve(entry.target); // Stop observing once it's visible
//             }
//         });
//     }, observerOptions);

//     sections.forEach(section => {
//         sectionObserver.observe(section);
//     });

//     // --- Active Navbar Link on Scroll (from your existing code) ---
//     const navLinksList = document.querySelectorAll('.ul-links a'); // Using ulLinks for consistency

//     function updateActiveNavLink() {
//         let currentSection = '';
//         const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0; // Get navbar height safely

//         sections.forEach(section => {
//             const sectionTop = section.offsetTop - navbarHeight;
//             const sectionHeight = section.clientHeight;
//             // Check if current scroll position is within the section
//             if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
//                 currentSection = section.getAttribute('id');
//             }
//         });

//         navLinksList.forEach(link => {
//             link.classList.remove('active');
//             if (link.getAttribute('href').includes(currentSection)) {
//                 link.classList.add('active');
//             }
//         });

//         // Special handling for home section if at the very top
//         if (window.pageYOffset === 0 && document.querySelector('.ul-links a[href="#home"]')) {
//              document.querySelector('.ul-links a[href="#home"]').classList.add('active');
//         }
//     }

//     window.addEventListener('scroll', updateActiveNavLink);
//     updateActiveNavLink(); // Call on load to set initial active link


//     // --- Dark Mode Toggle Logic (New/Integrated) ---
//     const themeToggle = document.getElementById('checkbox');
//     const body = document.body;

//     if (themeToggle) {
//         // Load saved theme from localStorage
//         const currentTheme = localStorage.getItem('theme');
//         if (currentTheme) {
//             body.classList.add(currentTheme);
//             if (currentTheme === 'dark-mode') {
//                 themeToggle.checked = true;
//             }
//         }

//         themeToggle.addEventListener('change', () => {
//             if (themeToggle.checked) {
//                 body.classList.add('dark-mode');
//                 localStorage.setItem('theme', 'dark-mode');
//             } else {
//                 body.classList.remove('dark-mode');
//                 localStorage.setItem('theme', 'light-mode'); // Or simply remove 'theme'
//             }
//         });
//     }

//     // --- Show More Projects Functionality (New/Integrated) ---
//     const showMoreBtn = document.getElementById('showMoreProjectsBtn');
//     const hiddenProjects = document.getElementById('hiddenProjects');

//     if (showMoreBtn && hiddenProjects) {
//         // Initial check: if there are no projects inside hiddenProjects, hide the button
//         if (hiddenProjects.children.length === 0) {
//             showMoreBtn.style.display = 'none';
//         }

//         showMoreBtn.addEventListener('click', function() {
//             hiddenProjects.classList.toggle('show'); // Toggle the 'show' class

//             // Change button text based on state
//             if (hiddenProjects.classList.contains('show')) {
//                 showMoreBtn.textContent = 'Show Less Projects';
//             } else {
//                 showMoreBtn.textContent = 'Show More Projects';
//                 // Optional: Scroll back to the top of projects section if "Show Less" is clicked
//                 // This ensures the user doesn't get lost after hiding projects.
//                 document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     }

//     // --- Update copyright year (Ensure this is at the end or called appropriately) ---
//     const currentYearSpan = document.getElementById('currentYear');
//     if (currentYearSpan) {
//         currentYearSpan.textContent = new Date().getFullYear();
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    // --- Navbar Toggler ---
    const hamburger = document.querySelector('.hamburger');
    const ulLinks = document.querySelector('.ul-links'); // Ensure this matches your nav links container class

    if (hamburger && ulLinks) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');
            ulLinks.classList.toggle('open');
        });

        // Close the mobile menu when a link is clicked (for single-page navigation)
        const links = ulLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                // Check if the menu is open and if it's a small screen before closing
                if (window.innerWidth <= 768 && ulLinks.classList.contains('open')) {
                    hamburger.classList.remove('open');
                    ulLinks.classList.remove('open');
                }
            });
        });
    }

    // --- Custom Cursor Logic ---
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (cursorDot && cursorOutline) { // Ensure cursor elements exist
        window.addEventListener("mousemove", function(e) {
            const posX = e.clientX;
            const posY = e.clientY;

            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;

            // Use Web Animations API for smoother outline movement
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" }); // Adjust duration for desired smoothness
        });

        // Add hover effect for interactive elements
        document.querySelectorAll('a, button, input[type="submit"], .project-card, .skill-category-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.classList.add('hover-active');
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.classList.remove('hover-active');
            });
        });

        // Hide custom cursor when mouse leaves the window
        document.body.addEventListener("mouseleave", () => {
            cursorDot.style.opacity = "0";
            cursorOutline.style.opacity = "0";
        });

        // Show custom cursor when mouse enters the window
        document.body.addEventListener("mouseenter", () => {
            cursorDot.style.opacity = "1";
            cursorOutline.style.opacity = "1";
        });
    }


    // --- Scroll Fade-in Animation for Sections (from your existing code) ---
    // Note: ScrollReveal is linked in your HTML, consider using it consistently or removing if not needed.
    // If you are using ScrollReveal, this IntersectionObserver logic might be redundant.
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section must be visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Active Navbar Link on Scroll (from your existing code) ---
    const navLinksList = document.querySelectorAll('.ul-links a'); // Using ulLinks for consistency

    function updateActiveNavLink() {
        let currentSection = '';
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0; // Get navbar height safely

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navbarHeight;
            const sectionHeight = section.clientHeight;
            // Check if current scroll position is within the section
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinksList.forEach(link => {
            link.classList.remove('active');
            // Handle links to index.html#section for multi-page setup
            if (link.getAttribute('href').includes(currentSection) ||
                (link.getAttribute('href') === 'projects.html' && currentSection === 'projects')) { // Special case for projects.html
                link.classList.add('active');
            }
        });

        // Special handling for home section if at the very top
        if (window.pageYOffset === 0 && document.querySelector('.ul-links a[href="index.html#home"]')) {
             document.querySelector('.ul-links a[href="index.html#home"]').classList.add('active');
        } else if (window.pageYOffset === 0 && document.querySelector('.ul-links a[href="#home"]')) { // For index.html itself
            document.querySelector('.ul-links a[href="#home"]').classList.add('active');
        }
    }

    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink(); // Call on load to set initial active link


    // --- Dark Mode Toggle Logic (New/Integrated) ---
    const themeToggle = document.getElementById('checkbox'); // Ensure your checkbox has id="checkbox"
    const body = document.body;

    if (themeToggle) {
        // Load saved theme from localStorage
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            body.classList.add(currentTheme);
            if (currentTheme === 'dark-mode') {
                themeToggle.checked = true;
            }
        }

        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode'); // Or simply remove 'theme'
            }
        });
    }

    // --- Show More Projects Functionality (New/Integrated) ---
    // Note: This logic assumes you have a "Show More" button and a hidden container.
    // If you're using a full slider now, this might not be needed or will interact differently.
    const showMoreBtn = document.getElementById('showMoreProjectsBtn');
    const hiddenProjects = document.getElementById('hiddenProjects');

    if (showMoreBtn && hiddenProjects) {
        // Initial check: if there are no projects inside hiddenProjects, hide the button
        if (hiddenProjects.children.length === 0) {
            showMoreBtn.style.display = 'none';
        }

        showMoreBtn.addEventListener('click', function() {
            hiddenProjects.classList.toggle('show'); // Toggle the 'show' class

            // Change button text based on state
            if (hiddenProjects.classList.contains('show')) {
                showMoreBtn.textContent = 'Show Less Projects';
            } else {
                showMoreBtn.textContent = 'Show More Projects';
                // Optional: Scroll back to the top of projects section if "Show Less" is clicked
                // This ensures the user doesn't get lost after hiding projects.
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // --- Project Slider Logic (INTEGRATED) ---
    const projectGrid = document.querySelector('.project-grid');
    const prevBtn = document.querySelector('.slider-btn.prev-btn');
    const nextBtn = document.querySelector('.slider-btn.next-btn');

    if (projectGrid && prevBtn && nextBtn) {
        // Determine scroll amount based on card width + gap for better snapping
        // This is a more robust way than just half the container width
        const firstCard = projectGrid.querySelector('.project-card');
        let scrollAmount = firstCard ? firstCard.offsetWidth + 32 : projectGrid.offsetWidth / 2; // 32px is 2rem gap

        prevBtn.addEventListener('click', () => {
            projectGrid.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            projectGrid.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        // Optional: Hide/show buttons based on scroll position
        const updateSliderButtons = () => {
            // Get a fresh scroll amount if window resizes, though it's less critical now with dynamic calculation
            const currentFirstCard = projectGrid.querySelector('.project-card');
            scrollAmount = currentFirstCard ? currentFirstCard.offsetWidth + 32 : projectGrid.offsetWidth / 2;

            const { scrollLeft, scrollWidth, clientWidth } = projectGrid;

            // Give a small buffer (e.g., 5px) for floating point inaccuracies
            prevBtn.style.display = scrollLeft > 5 ? 'block' : 'none';
            // If the scroll position plus the visible width is less than the total scrollable width, show next button
            nextBtn.style.display = (scrollLeft + clientWidth + 5) < scrollWidth ? 'block' : 'none';

            // Also ensure buttons are hidden on very small screens if CSS handles it
            if (window.innerWidth <= 768) {
                prevBtn.style.display = 'none';
                nextBtn.style.display = 'none';
            }
        };

        projectGrid.addEventListener('scroll', updateSliderButtons);
        // Recalculate on resize to adjust scrollAmount and button visibility
        window.addEventListener('resize', updateSliderButtons);
        // Initial check on load
        updateSliderButtons();
    }


    // --- Update copyright year (Ensure this is at the end or called appropriately) ---
    const currentYearSpan = document.getElementById('currentYear'); // Assuming you have a span with this ID
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

}); // End of DOMContentLoaded