document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.sidebar-links a');

    // Smooth scrolling for links
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Update active link on scroll
    const updateActiveLink = () => {
        const midpoint = window.innerHeight / 2;

        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= midpoint && rect.bottom >= midpoint) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLinks[index].classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', updateActiveLink);
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    let currentSectionIndex = 0;

    const scrollToSection = (index) => {
        if (index >= 0 && index < sections.length) {
            sections[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
            currentSectionIndex = index;
        }
    };

    // Listen for scroll events
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            // Scroll down
            scrollToSection(currentSectionIndex + 1);
        } else if (event.deltaY < 0) {
            // Scroll up
            scrollToSection(currentSectionIndex - 1);
        }
    });
});






//timeline//

document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = '#f4f4f4';
            item.style.transition = 'background-color 0.3s';
        });

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });
});


// Update navigation link for Experience
const experienceLink = document.querySelector('.sidebar-links a[href="#experience"]');
if (experienceLink) {
    experienceLink.setAttribute('href', '#experience');
    experienceLink.innerHTML = '<span class="icon">💼</span> Experience';
}




// Add dynamic background animation to Welcome section
document.addEventListener('DOMContentLoaded', () => {
    const welcomeSection = document.querySelector('.Welcome');
    let hue = 0;

    setInterval(() => {
        hue = (hue + 1) % 360;
        welcomeSection.style.background = `linear-gradient(135deg, hsl(${hue}, 70%, 50%), hsl(${(hue + 60) % 360}, 70%, 50%))`;
    }, 50);
});
