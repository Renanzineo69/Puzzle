document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("botao-audio");
    const audio = document.getElementById("meu-audio");

    botao.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
    });
});
