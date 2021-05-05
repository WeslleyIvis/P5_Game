function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(13)
  somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial ();  
  jogo.setup();
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width / 2, height / 2);
}

function keyPressed() {
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw(); 
  
  }
  












// height = altura
// width = largura
 //repete a musica assim que acabar
  //somDoJogo.play(); << Toca a musica uma vez


//Imagem kirby = 520 / 315
//background(imagemCenario);
//image(imagemCenario, -50, 0, width, height);
//image(imagemCenario, width -48, 0, width, height);
//image(imagemPersonagem,0 , height -90, 70, 70, 0, 0, 50,60);
//                       1     1         2   2  3  3   4  4
// height > joga o personagem pra baixo da imagem  
//passo 1 > Eixo Y da imagem, posicionamento
//passo 2 > Eixo X da imagem, posicionamento
//passo 3 > Cordenada X de dentro da imagem
//passo 4 > Cordenada Y de dentro da imagem 