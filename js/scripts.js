document.addEventListener('DOMContentLoaded', () => {
    const astronautText = document.querySelector('.astronaut-text');
    const textLine1 = 'Hello, I am Aris.';
    const textLine2 = 'Created by Yuvaraj';
    const typingSpeed = 100; // Speed of typing effect in milliseconds

    function animateText(element, text, speed, callback) {
        let index = 0;
        element.textContent = ''; // Clear any existing content in the element
        const interval = setInterval(() => {
            element.textContent += text.charAt(index); // Use textContent to avoid HTML injection
            index++;
            if (index === text.length) {
                clearInterval(interval);
                if (callback) callback(); // Execute callback if provided
            }
        }, speed);
    }

    if (astronautText) {
        // Ensure the element is found before proceeding
        const line1 = document.createElement('div');
        line1.className = 'line1';
        astronautText.appendChild(line1);

        const line2 = document.createElement('div');
        line2.className = 'line2';
        astronautText.appendChild(line2);

        animateText(line1, textLine1, typingSpeed, () => {
            setTimeout(() => {
                animateText(line2, textLine2, typingSpeed);
            }, 500); // Adjust the delay as needed
        });
    } else {
        console.error("The element with class 'astronaut-text' was not found.");
    }
});
