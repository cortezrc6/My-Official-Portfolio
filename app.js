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