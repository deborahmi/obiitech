const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
});

// Close dropdown when a navigation link is clicked
document.querySelectorAll('.drop-down .items').forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('open');
    });
});

// Image Lightbox Modal Logic
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.modal-close');

document.querySelectorAll('.lightbox-trigger').forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        modalCaption.innerText = this.alt;
    });
});

// Close when clicking the 'x' button
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close when clicking anywhere outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// WhatsApp Form Direct Sender with Source Tag
const whatsappForm = document.getElementById('whatsappForm');

if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('clientName').value;
        const message = document.getElementById('clientMessage').value;
        
        // Your dad's WhatsApp phone number[cite: 15]
        const phoneNumber = "2348162700488"; 
        
        // Clearly tag the message as coming from the website
        const text = `*NEW WEBSITE INQUIRY*\n------------------------\n*Client Name:* ${name}\n\n*Project Details:*\n${message}`;
        
        // Open WhatsApp with the tagged message
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappURL, '_blank');
    });
}

// Animated Progress Bar Preloader (Slower & Smoother)
window.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progressBar');
    const preloader = document.getElementById('preloader');
    
    let currentWidth = 0;
    
    // Increment progress in smaller, steady steps
    const loadingInterval = setInterval(() => {
        if (currentWidth >= 85) {
            clearInterval(loadingInterval);
        } else {
            currentWidth += 2; // Smaller step size for a steady fill
            progressBar.style.width = currentWidth + '%';
        }
    }, 50); // Updates every 50ms for smooth movement

    // Complete the bar and fade out after page load
    window.addEventListener('load', () => {
        clearInterval(loadingInterval);
        progressBar.style.width = '100%';
        
        // Hold at 100% for 800ms so the user sees the complete bar before fading
        setTimeout(() => {
            if (preloader) {
                preloader.classList.add('hide-preloader');
            }
        }, 800);
    });
});