document.addEventListener("DOMContentLoaded", () => {
    const gifContainer = document.querySelector('.gif-container');

    let posX = 100;
    let posY = 100;
    let velocityX = 2;
    let velocityY = 2;

    const moveGif = () => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const gifWidth = gifContainer.offsetWidth;
        const gifHeight = gifContainer.offsetHeight;

        posX += velocityX;
        posY += velocityY;

        // Colisão com bordas
        if (posX + gifWidth >= screenWidth || posX <= 0) {
            velocityX *= -1;
        }

        if (posY + gifHeight >= screenHeight || posY <= 0) {
            velocityY *= -1;
        }

        gifContainer.style.left = `${posX}px`;
        gifContainer.style.top = `${posY}px`;

        requestAnimationFrame(moveGif);
    };

    moveGif();
});