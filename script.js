document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
            
            // Close other open answers
            faqQuestions.forEach(q => {
                if (q !== this && q.classList.contains('active')) {
                    q.classList.remove('active');
                    q.nextElementSibling.classList.remove('active');
                }
            });
        });
    });

    // Location data
    const locations = [
        {
            name: "Hurghada Marina",
            address: "Marina Boulevard, Hurghada",
            description: "Conveniently located near the marina with many restaurants and shops nearby.",
            rating: "★★★★★",
            image: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Sheraton Hotel",
            address: "Sheraton Road, Hurghada",
            description: "Secure storage inside the Sheraton Hotel lobby. Open 24/7 for hotel guests.",
            rating: "★★★★☆",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "El Dahar Downtown",
            address: "El Dahar Square, Hurghada",
            description: "Central location perfect for exploring the old town markets.",
            rating: "★★★★☆",
            image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            name: "Giftun Ferry Terminal",
            address: "Port of Hurghada",
            description: "Ideal for day-trippers to Giftun Island. Store bags before your boat trip.",
            rating: "★★★☆☆",
            image: "https://images.unsplash.com/photo-1503917988258-f87a78e3c995?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        }
    ];

    // Display locations
    const locationCardsContainer = document.getElementById('location-cards');
    
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card';
        locationCard.innerHTML = `
            <div class="location-img">
                <img src="${location.image}" alt="${location.name}">
            </div>
            <div class="location-info">
                <h3>${location.name}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${location.address}</p>
                <p>${location.description}</p>
                <div class="location-rating">${location.rating}</div>
                <button class="btn-primary">Book Now</button>
            </div>
        `;
        locationCardsContainer.appendChild(locationCard);
    });

    // Form submissions
    const bookingForm = document.getElementById('booking-form');
    const contactForm = document.getElementById('contact-form');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const date = document.getElementById('date').value;
            const bags = document.getElementById('bags').value;
            
            // In a real app, you would process the booking here
            alert(`Booking request received for ${bags} bag(s) on ${date}. Redirecting to locations...`);
            window.location.href = "#locations";
        });
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // In a real app, you would send this data to a server
            alert(`Thank you, ${name}! Your message has been sent. We'll contact you at ${email} soon.`);
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                nav.classList.remove('active');
            }
        });
    });
});