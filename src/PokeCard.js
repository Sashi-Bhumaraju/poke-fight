import React from "react";
import './PokeCard.css'
const POKEMON_IMAGE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';


let padToThree = (num) => {return num <= 999? ("00"+num).slice(-3):num}

class PokeCard extends React.Component{

    static defaultProps = {
     
            name : 'Metapod',
            type : 'fire',
            exp :136,
            id:136
        
    }
    render(){

        return(
            <div className="PokeCard">
               <img src= {POKEMON_IMAGE_API +padToThree(this.props.id)+".png"}></img>

                <div className="Pokemon-Content">
                    <div className="Heading">{this.props.name}</div>

                    <div className="data"> 
                          <div>{this.props.type}</div>
                          <div>{this.props.exp}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PokeCard;