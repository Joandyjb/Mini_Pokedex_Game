import React, {Component} from 'react';
import './Pokecard.css'
// const Poke_Api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
const Poke_Api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);


class Pokecard extends Component {
    render() {
    let img_src = `${Poke_Api}${padToThree(this.props.id)}.png`;
    return (
        <div className="Pokecard">
            <h1>{this.props.name}</h1>
            <img className='Pokecard-img' src= {img_src} alt={this.props.name} />
            <div> Type: {this.props.type} </div>
            <div> EXP: {this.props.exp} </div>
        </div>
    )  
    }
  }


  export default Pokecard;