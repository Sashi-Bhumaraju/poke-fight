import React from "react";
import PokeDex from "./PokeDex";
import pokeball from "./pokeball.png";
import fight from './fight.svg'
import pichachu_song from './Pikachu.mp3'
import './PokeGame.css'



class PokeGame extends React.Component{   
    constructor(props){
        super(props)
        this.state = {
            hand1 : [ ],
            hand2 : [ ]
        }
        // this.addEventListener = this.addEventListener.bind(this);
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
      static pow1 = 0;
      static pow2 = 0;

       t=()=>{
        this.playAudio();
        this.setState(prevState => ({
                  }));   }  

    playAudio=()=>{
    let song = new Audio(pichachu_song);
    song.play();
   
    }
  
   winner  = (<div className="win"></div>)

    d = (e) =>{
    console.log(e.which);
  
        if(e.keyCode === 13 )
        {this.t()}

        if(e.keyCode === 78 )
        {this.t()}
   }
  
    render(){

        document.addEventListener("keydown", this.d)
      

        
        let h1 = [];
        let h2 = [...this.props.pokemon];
           
          
           while(h1.length<h2.length){
               let randIdx =  Math.floor(Math.random()*h2.length);
               let r = h2.splice(randIdx,1)[0]
               h1.push(r)
           }
        //    this.setState(prevState => ({
            
        //      }));
            this.state.hand1 = [...h1]
            this.state.hand2 = [...h2]

           
             this.pow1 = this.state.hand1.reduce((sum,pokeman)=>sum + pokeman.base_experience,0)
             this.pow2 = this.state.hand2.reduce((sum,pokeman)=>sum + pokeman.base_experience,0)
            //  w=<div style={{color:"green"}}> win </div>
            //  l=<div style={{color:"red"}}> lose </div>
        return(
           
            <div className="PokeGame">
             
             {/* <div className="rightthumb">  <img width={100}  src={tup}></img></div>
             <div className="leftthumb"><img width={100}  src={tdown}></img></div> */}
                
              {this.state.hand1.length !==0 ? <PokeDex pokemon = {this.state.hand1} ></PokeDex>:null}
              <div className="PokeGame-start">
            
           
              <div className="isWinner"><div className="score">{this.pow1}</div>

              <div className="win">{this.pow1 > this.pow2? <div style={{color:"#39FF14"}}> win </div> : <div style={{color:"#FF0000"}}> lose </div>}</div></div>

              <div className="isWinner"><div className="score">{this.pow2}</div> 

              <div className="win">{this.pow2 > this.pow1? <div style={{color:"#39FF14"}}> win </div> : <div style={{color:"#FF0000"}}> lose </div>}</div></div>
             
           
               <img className="ball" src={pokeball} ></img>
               

               <div className="punch" onClick={this.t} > <img width={60} src={fight}></img>  <div className="text">Fight</div></div>
              
              </div>
             
              {this.state.hand1.length !==0 ? <PokeDex pokemon = {this.state.hand2} ></PokeDex>:null}

            </div>
        )
    }
}

export default PokeGame;