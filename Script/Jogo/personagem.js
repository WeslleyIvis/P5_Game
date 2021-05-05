class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprit, alturaSprit) {
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprit, alturaSprit);

    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - this.variacaoY;
    this.y = this.yInicial;

    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = -30
    this.pulos = 0
    this.invencivel = false

  }
  pula() {
    if (this.pulos < 2)
      this.velocidadeDoPulo = this.alturaDoPulo
    this.pulos++

  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

    if (this.y > this.yInicial) {
      this.y = this.yInicial
      this.pulos = 0
    }
  }
  tornarInvencivel(){
    this.invencivel = true
    setTimeout(() => {
      this.invencivel = false
    }, 1000)
     
  }
  estaColidindo(inimigo) {
    if(this.invencivel){
      return false
    }
  
    const precisao = .5
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * precisao,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );

    return colisao;
  }

}



  //  noFill()
    // rect(this.x, this.y, this.largura, this.altura)
    // rect( inimigo.x,
    //     inimigo.y,
    //    inimigo.largura,
    //   inimigo.altura)












//exibe(){
//image(this.imagem ,0 , height -90,  [70, 70,] > Largura e altura da imagem. 0, 60, [50,60] >Largura e altura);
//    image(this.imagem ,50 , height -85, 50, 70, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], 25,40);

//  this.anima()