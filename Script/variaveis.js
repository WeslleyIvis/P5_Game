let imagemCenario;
let camada0;
let camada2;
let imagemPersonagem;
let imagemInimigo;
let imagemInimigo1;
let imagemInimigoVoador;
let imagemGameOver;
let imagemVida;
let cenaAtual= 'telaInicial'
let cenas;
let telaInicial;
let ImagemTelaInicial;
let fonteTelaInicial;
let botaoGerenciador;
let vida;


let cenario;
let camada;
let camadas;
let somDoPulo;
let somDoPulo1;
let somDoJogo;
let somTomandoDano;
let somTomandoDano1;
let personagem;
let inimigo;
let inimigo1;
let inimigoVoador;
let jogo;
let pontuacao;


//let > cria uma variavel

const matrizInimigo = [
  [0, 0],
  [45, 0],
  [120, 0],
  [160, 0],
  [190, 0],
  [230, 0],
  [270, 0],
  [315, 0],
  [360, 0],
  [400, 0],
  [440, 0],
]
const matrizPersonagem = [
  [10, 0],
  [34, 0],
  [58, 0],
  [81, 0],
  [34, 0],
  [101.8, 0],
  [125, 0],
  [150, 0],
  [173, 0],
  [195, 0],
  [219, 0],
]
const matrizInimigo1 = [
  [0, 0],
  [60, 0],
  [100, 0],
  [150, 0],
  [200, 0],
  [250, 0],
  [300, 0],
  [350, 0],
  [0, 70],
  [60, 70],
  [120, 70],
  [180, 70],
  [240, 70],
  [310, 70],
  [380, 70],
  [310, 70],
  [240, 70],
  [180, 70],
  [120, 70],
  [60, 70],

]
const matrizInimigoVoador = [
  [0, 0],
  [45, 0],
  [95, 0],
  [145, 0],
  [190, 0],
  [0, 50],
  [45, 50],
  [95, 50],
  [145, 50],
  [190, 50],
  [0, 100],
  [45, 100],
  [95, 100],
  [145, 100],
  [190, 100],
  [0, 145],
  [45, 145],
  [95, 145],
  [145, 145],
  [190, 145],
  [0, 195],
  [45, 195],
  [95, 195],
  [145, 195],
  [190, 195],
  [0, 240],
  [45, 240],
  [95, 240],
  [145, 240],
  [190, 240],
  [0, 290],
  [45, 290],
  [95, 290]
]

const inimigos = []