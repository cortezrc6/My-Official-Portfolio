function typeWriter(element, text, speed) {
    let i = 0;
    const interval = setInterval(() => {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// Call the typewriter function for each element
typeWriter(document.getElementById('typewriter-h1'), "I'M ROLLY", 100);
typeWriter(document.getElementById('typewriter-h2'), "HELLO", 100);
typeWriter(document.getElementById('typewriter-h3'), "FULLSTACK DEVELOPER", 100);
typeWriter(document.getElementById('typewriter-p'), "I'm a versatile full-stack developer proficient in both front-end and back-end technologies,", 20);
typeWriter(document.getElementById('typewriter-p2'), "passionate about crafting seamless digital experiences from concept to deployment.", 20);


function fadeInImage(element, delay) {
    setTimeout(() => {
        element.classList.add('show');
    }, delay);
}

// Call the fadeInImage function for each icon one by one
fadeInImage(document.getElementById('fb-icon'), 1000); // Delay the appearance of the first icon by 1000 milliseconds (1 second)
fadeInImage(document.getElementById('instagram-icon'), 1500); // Delay the appearance of the second icon by 2000 milliseconds (2 seconds)
fadeInImage(document.getElementById('linkedin-icon'), 2000); // Delay the appearance of the third icon by 3000 milliseconds (3 seconds)
fadeInImage(document.getElementById('upwork-icon'), 2500); // Delay the appearance of the fourth icon by 4000 milliseconds (4 seconds)

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.scroll');
    const navLinks = document.querySelectorAll('header a');

    sections.forEach((section, index) => {
        const top = section.offsetTop - 150;
        const bottom = top + section.clientHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach((link) => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }
    });
}

// Add scroll event listener to update active navigation link
window.addEventListener('scroll', updateActiveNavLink);

// Initial call to set the active link on page load
updateActiveNavLink();