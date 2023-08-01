import { conectaApi } from "./conectaApi.js";
import { constroiCard } from "./mostrarVideos.js";

async function buscarVideo(event) {
    event.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]");
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener(click, event => buscarVideo(event));