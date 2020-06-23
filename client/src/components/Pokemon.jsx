import React from 'react';
import pokeTypes from '../pokeData.js'

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        type: '',
        weakness: '',
        name: ''
      }
      this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e) {
        console.log(e.target.id)
    }
    
    render() {
        const pokemon = this.props.pokemon;
        return (
            <div id={pokemon.name} onClick={this.handleClick} className="card">
                         <h1>{pokemon.name}</h1>
                         <img width="150px" src={pokemon.img}/>
                    </div>
        )
    }
}



export default Search