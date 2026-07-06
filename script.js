document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Simple burger icon animation transformation
        const bars = mobileMenu.querySelectorAll('.bar');
        bars[0].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translate(-5px, 6px)' : 'none';
        bars[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        bars[2].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translate(-5px, -6px)' : 'none';
    });

    // Close mobile menu when a nav item is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const bars = mobileMenu.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });

    // --- Premium Interactive FAQ Accordion ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            
            // Close other items if one is opened
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            item.classList.toggle('active');
        });
    });

    // --- Performance Optimized Animated Counter Strategy ---
    const stats = document.querySelectorAll('.stat-number');
    const speed = 150; // Speed modifier lower = faster

    const startCounters = () => {
        stats.forEach(counter => {
            const updateCount = () => {
                const target = parseInt(counter.getAttribute('data-target'), 10);
                const count = parseInt(counter.innerText, 10);
                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Trigger counters only when they roll into visual view
    const observerOptions = {
        threshold: 0.5
    };

    const statsSection = document.querySelector('.stats-section');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startCounters();
                observer.unobserve(entry.target); // Runs animation exactly once
            }
        });
    }, observerOptions);

    observer.observe(statsSection);
});
const form = document.getElementById('form');
const submitBtn = form.querySelector('button[type="submit"]');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    formData.append("access_key", "4525cc64-4dae-4a25-8774-a3c4f4afed5a");

    const originalText = submitBtn.textContent;

    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (response.ok) {
            alert("Success! Your message has been sent.");
            form.reset();
        } else {
            alert("Error: " + data.message);
        }

    } catch (error) {
        alert("Something went wrong. Please try again.");
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
});
// Track Record Scroll Reveal Animation Framework
document.addEventListener("DOMContentLoaded", () => {
    const trackCards = document.querySelectorAll(".track-card-item");

    const revealOnScrollOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const trackObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;
            
            // Staggered loading calculation
            setTimeout(() => {
                entry.target.classList.add("reveal");
            }, index * 100); 
            
            observer.unobserve(entry.target);
        });
    }, revealOnScrollOptions);

    trackCards.forEach(card => {
        trackObserver.observe(card);
    });
});