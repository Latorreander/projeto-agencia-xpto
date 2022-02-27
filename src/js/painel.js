/*

    quando clicar nas seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem

     colocar o Mostrar somente na imagem atual a ser exibida, tirando automaticamente das imagens anteriores que ja foram mostradas

     
     esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar
            
            mostrar a próxima imagem
            pegar todas as imagens, descobrir qual é a próxima e colocar a classe Mostrar nela                            
            */

const imagens = document.querySelectorAll(".imagem-painel");
const setaAvancar = document.getElementById("btn-avancar");
const setaVoltar = document.getElementById("btn-voltar");
let imagemAtual = 0;

/* quando clicar nas seta pra avançar temos que esconder todas as imagens e mostrar a próxima imagem */

setaAvancar.addEventListener("click", function () {
  //testa se o contador da imagem atual é igual ao total de imagens
  const totalDeImagens = imagens.length - 1;
  if (imagemAtual === totalDeImagens) {
    return;
  }

  /* a imagem atual começa em 0 porque é a primeira imagem, assim que for clicado no avançar eu preciso adicionar mais um ao contador de imagens para que a imagem seja trocada */

  imagemAtual++;

  /*
      esconder todas as imagens
      pegar todas as imagens usando o DOM e remover a classe mostrar  */

  imagens.forEach((imagem) => {
    imagem.classList.remove("mostrar");
  });

  /*colocar o Mostrar somente na imagem atual a ser exibida, tirando automaticamente das imagens anteriores que ja foram mostradas*/

  imagens[imagemAtual].classList.add("mostrar");
});

setaVoltar.addEventListener("click", function () {
  if (imagemAtual === 0) {
    return;
  }

  imagemAtual--;

  imagens.forEach((imagem) => {
    imagem.classList.remove("mostrar");

    imagens[imagemAtual].classList.add("mostrar");
  });
})




