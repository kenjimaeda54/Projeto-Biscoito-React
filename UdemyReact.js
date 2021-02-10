import React, {Component} from 'react';
import './bisco.css';
import biscoito from "../src/img/biscoito.jpg";



class index extends Component{
      constructor(props){
           super(props);
           this.state={
              frase:'',
           }
     this.frase=['Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar', 
                 'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho',        
                 'Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito. A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores.', 
                 ' Tente a sua sorte! A vida é feita de oportunidades.', 
                 'O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',   
                 'A perseverança é a mãe da boa sorte   O homem é assim o árbitro constante de sua própria sorte. Ele pode aliviar o seu suplício ou prolongá-lo indefinidamente.', 
                 'Sua felicidade ou sua desgraça dependem da sua vontade de fazer o bem',
                 ' Destino não é uma questão de sorte, mas uma questão de escolha; não é uma coisa que se espera, mas que se busca',
                 ' Que sorte possuir uma grande inteligência: nunca te faltam asneiras para dizer',
                 'A sorte favorece a mente bem preparada.',
                'Sorte é estar pronto quando a oportunidade vem.',
                'A sorte ajuda os audazes.',
                ' A sorte do egoísta é viver sem preocupações; o seu castigo é morrer sem afectos.'
                ];
          this.resultado = this.resultado.bind(this);                
}
  resultado(){
    let estado = this.state;
    let numerofrase = Math.floor(Math.random()*this.frase.length);
    estado.frase ="'"+ this.frase[numerofrase]+"'";//this.frase[numerofrase]  e toda variavel
    this.setState(estado);
  }
     
     render(){
       return(
           <div className="container">
           <img src={biscoito} //importar a imagem usando import no top.
             className="biscoito"/>
           <Botao nome="Biscoito da sorte"  acaoBtn={this.resultado} />
           <h3 className="frase">{this.state.frase}</h3>
           </div>
       )  
     };
}

class Botao extends Component{
      render(){
        return(
          <button onClick={this.props.acaoBtn}//Estou chamdno a tag,atençaõ.
          >{this.props.nome}</button>
        );
      }
}
export default index;