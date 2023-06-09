async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

async function criaVideo(titulo, descricao, imagem, url) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      imagem: imagem,
      url: url
    })
  });
  const conexaoConvertida = await conexao.json();

  return conexaoConvertida;
};


export const conectaApi = {
  listaVideos,
  criaVideo,
};