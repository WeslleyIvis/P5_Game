class Jogo {
  constructor() {
    this.indice = 0;
    this.mapa = [{
        inimigo: 0,
        velocidade: 30
      },
      {
        inimigo: 1,
        velocidade: 30
      },
      {
        inimigo: 1,
        velocidade: 40
      },
      {
        inimigo: 2,
        velocidade: 40
      }
    ]
  }

  setup() {
    cenario = new Cenario(imagemCenario, 0);
    camada = new Camada(camada0, 5);
    pontuacao = new Pontuacao();
    vida = new Vida(3, 3);

    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 10, 55, 120, 150, 25, 50);

    const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 150, 50, 100, 120, 35, 50, 10 );

    const inimigo1 = new
    Inimigo(matrizInimigo1, imagemInimigo1, width, 70, 150, 180, 50, 50, 10)

    const inimigoVoador = new
    Inimigo(matrizInimigoVoador, imagemInimigoVoador, width, 160, 130, 130, 50, 45, 10)

    inimigos.push(inimigo)
    inimigos.push(inimigo1)
    inimigos.push(inimigoVoador)

  }
  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()



    }
  }
  draw() {
    cenario.exibe();
    cenario.move();

    camada.exibe();
    camada.move();

    vida.draw();
    pontuacao.exibe();
    pontuacao.adicionarPonto();

    personagem.exibe();
    personagem.aplicaGravidade();

    const linhaAtual = this.mapa[this.indice];
    const inimigo = inimigos[linhaAtual.inimigo];
    const inimigoVisivel = inimigo.x < -inimigo.largura;
    inimigo.velocidade = linhaAtual.velocidade;



    inimigo.exibe();
    inimigo.move();

    if (inimigoVisivel) {
      this.indice++;
      inimigo.aparece();
      if (this.indice > this.mapa.length - 1) {
        this.indice = 0;
      }
    }

    if (personagem.estaColidindo(inimigo, inimigo1)) {
      vida.perdeVida();
      personagem.tornarInvencivel();
      somTomandoDano.play();
      if (vida.vidas === 0) {
        image(imagemGameOver, width / 2 - 200, height / 2 - 200)
        somTomandoDano.stop();
        somTomandoDano1.play();
        noLoop()
      }

    }
  }
}