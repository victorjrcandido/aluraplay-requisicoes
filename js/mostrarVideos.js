import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard() {
  const video = document.createElement("li");
  video.className = "video__item";
  video.innerHTML = `
  <iframe width="100%" height="72%" src="https://www.youtube.com/embed/HohH6hymUgM" title="Don&#39;t try to build this on Pantheon..." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  <div class="descricao-video">
      <img src="./img/logo.png" alt="logo canal alura">
      <h3>Qual é o melhor hardware para programação com Mario Souto</h3>
      <p>236 mil visualizações</p>
  </div>`
  return video
};


