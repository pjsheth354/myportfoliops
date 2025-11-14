// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple contact form handler (demo: shows alert)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
});

// Optional: Mobile menu toggle (if you want to add a hamburger menu)
const navUl = document.querySelector('nav ul');
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '☰';
toggleBtn.style.display = 'none';
toggleBtn.addEventListener('click', () => navUl.classList.toggle('show'));
document.querySelector('nav').appendChild(toggleBtn);

if (window.innerWidth <= 768) {
    toggleBtn.style.display = 'block';
}
