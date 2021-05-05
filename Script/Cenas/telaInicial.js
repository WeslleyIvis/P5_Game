class TelaInicial{
  constructor(){
  }
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
  }
  
  _imagemDeFundo(){    
    image(imagemTelaInicial, 0, 0, width, height);
  }
  
  _texto(){
    textFont(fonteTelaInicial);
    textAlign(CENTER)
    textSize(40)
    fill('#1AC033')
    text('Dream of', width /2 ,height / 4);
    textSize(50)
    fill('#B9A9EA')
    text('Kirby', width / 2, height / 5 * 2 )
  }  
  _botao(){
    botaoGerenciador.y =height / 6 * 3
    botaoGerenciador.draw();
    
  }
}