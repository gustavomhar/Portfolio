
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 80, 
            behavior: 'smooth'
        });
    });
});

// Scroll animação para os serviços e portfolio
window.addEventListener('scroll', () => {
    const servicesBox = document.querySelectorAll('.services-box');
    const portfolioBox = document.querySelectorAll('.portfolio-box');

    servicesBox.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (boxPosition < screenPosition) {
            box.classList.add('active');
        }
    });

    portfolioBox.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (boxPosition < screenPosition) {
            box.classList.add('active');
        }
    });
});


const servicesBox = document.querySelectorAll('.services-box');
const portfolioBox = document.querySelectorAll('.portfolio-box');

// Animação ao rolar
window.addEventListener('scroll', () => {
    servicesBox.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (boxPosition < screenPosition) {
            box.classList.add('active');
        }
    });

    portfolioBox.forEach(box => {
        const boxPosition = box.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (boxPosition < screenPosition) {
            box.classList.add('active');
        }
    });
});

// "Download CV"
const downloadBtn = document.querySelector('.home .btn');
downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();

    window.location.href = 'https://drive.google.com/file/d/1hWwemnD-N5wRHGce9ZHG9j1mRMy3eXwd/view?usp=sharing'; // Substitua por seu link do CV
});


// Animação para as boxes de serviços e portfolio
document.querySelectorAll('.services-box').forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('.portfolio-box').forEach((box) => {
    box.addEventListener('mouseover', () => {
        box.style.transform = 'scale(1.05)';
    });

    box.addEventListener('mouseout', () => {
        box.style.transform = 'scale(1)';
    });
});
