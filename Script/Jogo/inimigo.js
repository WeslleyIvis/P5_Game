class Inimigo extends Animacao {
  constructor(matriz, imagem, x, variacaoY, altura, largura, larguraSprit, alturaSprit, velocidade) {
    super(matriz, imagem, x, variacaoY, altura, largura, larguraSprit, alturaSprit)

    this.velocidade = velocidade
    this.x = width
  }
  move() {
    this.x = this.x - this.velocidade  
  }
  aparece(){
    this.x = width
  }
}