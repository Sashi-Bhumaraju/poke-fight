import React from "react";
import PokeDex from "./PokeDex";
import pokeball from "./pokeball.png";
import './PokeGame.css'

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon?limit=";


class PokeGame extends React.Component{   
    constructor(props){
        super(props)
        this. state = {
            hand1 : [ ],
            hand2 : [ ]
        }

    }
    static defaultState = {
        hand1 : [ {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},],
        hand2 : [ {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},]
    }
    static defaultProps ={
        pokemon:   [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
         //    {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
         //    {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ],    

       } 
      
       t=()=>{
     let h1 = [];
     let h2 = [...this.props.pokemon];
        
        let i = 0;
        while(h1.length<h2.length){
            let randIdx =  Math.floor(Math.random()*h2.length);
            let r = h2.splice(randIdx,1)[0]
            h1.push(r)
        }
        this.setState(prevState => ({
           hand1 : [...h1],
           hand2 : [...h2]
          }));
    
    }    

    render(){
        
        return(
            <div className="PokeGame">
              {this.state.hand1.length !=0 ? <PokeDex pokemon = {this.state.hand1} ></PokeDex>:null}
              <div className="PokeGame-start">
              {/* <div className="isWinner"></div>
              <div className="isWinner"></div> */}
                <img src={pokeball} onClick={this.t}></img>
               
              </div>
              {this.state.hand1.length !=0 ? <PokeDex pokemon = {this.state.hand2} ></PokeDex>:null}

            </div>
        )
    }
}

export default PokeGame;