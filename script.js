var typed = new Typed(".multiple-text", {
    strings: ["BSIT STUDENT", "STUDENT LEADER",],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})


const contactForm = document.getElementById('contact-form');
const popup = document.getElementById('popup-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    popup.classList.add('show');

    contactForm.reset();

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
});