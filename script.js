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
