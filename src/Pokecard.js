import React, { Component } from 'react';
import './Pokecard.css';


class Pokecard extends Component {
  render() {
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.id}.png`}/>
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    )
  }
}

export default Pokecard;