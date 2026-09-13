const cat = document.getElementById('cat');
const keyCountDisplay = document.getElementById('keyCount');
const lastKeyDisplay = document.getElementById('lastKey');

let keyCount = 0;
let isJumping = false;

// Handle keyboard events
document.addEventListener('keydown', (event) => {
    if (!isJumping) {
        // Add jump animation
        cat.classList.add('jumping');
        isJumping = true;

        // Move cat horizontally randomly
        const randomX = (Math.random() - 0.5) * 200;
        cat.style.transform = `translateX(calc(-50% + ${randomX}px))`;

        // Increment key count
        keyCount++;
        keyCountDisplay.textContent = keyCount;

        // Display last key pressed
        const keyChar = event.key === ' ' ? '(spacebar)' : event.key.toUpperCase();
        lastKeyDisplay.textContent = `Last key: ${keyChar}`;

        // Add random tilt to cat
        const randomRotation = (Math.random() - 0.5) * 10;
        cat.style.transform = `translateX(calc(-50% + ${randomX}px)) rotate(${randomRotation}deg)`;

        // Remove jump animation after it completes
        setTimeout(() => {
            cat.classList.remove('jumping');
            cat.style.transform = 'translateX(-50%)';
            isJumping = false;
        }, 400);
    }
});

// Add some playful animations on page load
window.addEventListener('load', () => {
    const canvas = document.querySelector('.canvas');
    canvas.style.animation = 'none';
    
    // Make cat do an initial jump after 1 second
    setTimeout(() => {
        cat.classList.add('jumping');
        setTimeout(() => {
            cat.classList.remove('jumping');
        }, 400);
    }, 1000);
});
