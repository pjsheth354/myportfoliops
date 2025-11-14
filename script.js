// Add any interactive JavaScript here
// Example: Smooth scrolling for nav links

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 10,
                behavior: 'smooth'
            });
        }
    });
});


/* --- Responsive Styling --- */
@media (max-width: 900px) {
    section {
        margin: 20px;
        padding: 20px;
    }
}

@media (max-width: 600px) {
    header h1 {
        font-size: 1.6rem;
    }
    nav {
        gap: 10px;
    }
    nav a {
        padding: 6px 10px;
        font-size: 0.9rem;
    }
    section {
        margin: 15px;
        padding: 18px;
    }
    .timeline {
        padding-left: 15px;
        border-left-width: 2px;
    }
    .timeline-dot {
        height: 12px;
        width: 12px;
        left: -8px;
    }
    .timeline-content {
        padding: 12px 15px;
    }
    h2 {
        font-size: 1.2rem;
    }
}

@media (max-width: 400px) {
    nav {
        flex-direction: column;
        align-items: center;
    }
    nav a {
        width: 90%;
        text-align: center;
        padding: 10px;
    }
    section {
        margin: 10px;
        padding: 15px;
    }
}
