// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
        
menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
        
// Close menu when a link is clicked (for mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        });
    });
        
    
// Portfolio Filtering
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

// Update active button
filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

// Filter items
const filterValue = button.getAttribute('data-filter');
portfolioItems.forEach(item => {
    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
        } else {
            item.style.display = 'none';
            }
            });
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('form-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.textContent;

  // Show loading state
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  status.innerHTML = '';

  emailjs.sendForm('service_u6e4o5m', 'template_ebhnn5b', form)
    .then(() => {
      status.innerHTML = '<p class="success">Message sent successfully!</p>';
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = `<p class="error">Error: ${error.text}</p>`;
    })
    .finally(() => {
      submitBtn.textContent = originalBtnText;
      submitBtn.disabled = false;
    });
});
// Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

