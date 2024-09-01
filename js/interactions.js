document.addEventListener('DOMContentLoaded', () => {
    const astronaut = document.querySelector('.astronaut');

    if (astronaut) {
        astronaut.addEventListener('click', () => {
            astronaut.classList.toggle('active');
        });
    } else {
        console.error("The element with class 'astronaut' was not found.");
    }
});
