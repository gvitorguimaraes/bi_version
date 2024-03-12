function pausarPorDoisSegundos() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2200);
    });
  }

function tornarVisivel()
{
    var load = document.getElementById("load");
    load.style.display = "block";
    load.style.marginTop = "40%"

    var imagens = document.getElementById("imagem");
    imagens.style.display = "none";
    var imagemRow = document.getElementById("imagemRow");
    imagemRow.style.marginTop = "40%";

    var dado = document.getElementById("dado")
    dado.style.display = "none";
    var dadoLinha = document.getElementById("linhaDado")
    dadoLinha.style.marginTop = "15%";

    var superior = document.getElementById("superior");
    superior.style.display = "none";
}

function tornarInvisivel()
{
    var load = document.getElementById("load");
    load.style.display = "none";

    var imagens = document.getElementById("imagem");
    imagens.style.display = "block";
    var imagens = document.getElementById("imagemRow");
    imagens.style.display = "block";

    var dado = document.getElementById("dado")
    dado.style.display = "block";
}

// Função a ser chamada quando o botão for clicado
async function minhaFuncao() {
    const pastaImagens = 'midia/imagens/';

    const arquivosImagens = [
        '100.png',
        '102.png',
        '110.png',
        '111.png',
        '114.png',
        '12.png',
        '121.png',
        '123.png',
        '125.png',
        '128.png',
        '134.png',
        '136.png',
        '139.png',
        '145.png',
        '154.png',
        '155.png',
        '157.png',
        '171.png',
        '175.png',
        '182.png',
        '191.png',
        '193.png',
        '198.png',
        '199.png',
        '205.png',
        '207.png',
        '22.png',
        '228.png',
        '229.png',
        '235.png',
        '236.png',
        '237.png',
        '238.png',
        '24.png',
        '246.png',
        '252.png',
        '264.png',
        '270.png',
        '271.png',
        '272.png',
        '275.png',
        '28.png',
        '282.png',
        '291.png',
        '293.png',
        '295.png',
        '301.png',
        '302.png',
        '305.png',
        '326.png',
        '328.png',
        '340.png',
        '341.png',
        '35.png',
        '366.png',
        '369.png',
        '371.png',
        '372.png',
        '374.png',
        '375.png',
        '377.png',
        '391.png',
        '396.png',
        '4.png',
        '402.png',
        '408.png',
        '414.png',
        '424.png',
        '436.png',
        '440.png',
        '445.png',
        '451.png',
        '462.png',
        '466.png',
        '473.png',
        '482.png',
        '495.png',
        '503.png',
        '506.png',
        '53.png',
        '54.png',
        '55.png',
        '6.png',
        '72.png',
        '75.png',
        '77.png',
        '85.png',
        '86.png',
        '89.png',
        '91.png',
        '92.png'
    ];

    // Seleciona aleatoriamente um arquivo de imagem
  const imagemAleatoria = arquivosImagens[Math.floor(Math.random() * arquivosImagens.length)];

  // Caminho completo para a imagem selecionada
  const caminhoImagem = pastaImagens + imagemAleatoria;

  tornarVisivel();
  await pausarPorDoisSegundos();
  tornarInvisivel();

  // Obtém o elemento HTML pelo ID
  const elementoImagem = document.getElementById('imagem');

  // Define o atributo src da imagem
  elementoImagem.src = caminhoImagem;
  }
  
  // Adicionando um evento de clique à imagem
  document.getElementById('dado').onclick = function() {
    minhaFuncao();
};