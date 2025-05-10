document.addEventListener("DOMContentLoaded", () => {
    const letras = ['p', 'r', 'e', 's', 's', 'f', '1', '2'];
    let index = 0;

    setInterval(() => {
        const letra = letras[index];
        const favicon = document.getElementById("favicon");
        favicon.href = `assets/favicons/${letra}.png`;
        index = (index + 1) % letras.length;
    }, 5000);
});
