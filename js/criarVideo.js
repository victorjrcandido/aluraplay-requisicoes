const formulario = document.querySelector("[data-formulario]");

function criarVideo(event) {
    event.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
}

formulario.addEventListener("submit", event => criarVideo(event));