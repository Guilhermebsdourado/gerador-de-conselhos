const adviceText = document.getElementById("conselho");
const btn = document.getElementById("botao");

function gerarNumero() {
    let numero = Math.floor(Math.random() * 300) + 1;
    document.querySelector(".nubAleatorio").textContent = numero;
}

gerarNumero();

async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    adviceText.textContent = data.slip.advice;
}

btn.addEventListener("click", async () => {
    await getAdvice();
    gerarNumero();
});
