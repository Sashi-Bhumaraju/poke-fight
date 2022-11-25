import React from "react";
import PokeCard from "./PokeCard";
import './PokeDex.css'

class PokeDex extends React.Component{


  
    

    render()
    {
       return(
        <div className="PokeDex">
           
            {this.props.pokemon.map((v) => (
           <div key={v.id}>     
          <PokeCard  id={v.id} name = {v.name} type = {v.type} exp = {v.base_experience} ></PokeCard> </div>
            ))}
            
          
        </div>
       )
    }
}


export default PokeDex;