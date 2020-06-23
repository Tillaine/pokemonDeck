import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        details: false,
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleDetailClose = this.handleDetailClose.bind(this)
      this.handleDetails = this.handleDetails.bind(this)

    }

    handleDetailClose() {
        this.setState({selected: false})
    }

    handleDetails() {
        this.setState({selected: true})
    }

    handleClick(e) {
        console.log(e.target.name)
    }
    
    render() {
        const pokemon = this.props.pokemon;
        return (
            <div className="col-sm-2 col-md-4">
                <div id={pokemon.name} className="card pokeCard">
                    <h3> {pokemon.name} <span className='num'>{pokemon.num}</span></h3>
                    <img className='pokeImg' width="75px" src={pokemon.img}/> 
                    <div className='card detais'>
                        <p className='typeDetails'> Type: {pokemon.type.join(', ')} </p>
                        <p className='weaknessDetails'> Weakness: {pokemon.weaknesses.join(', ')} </p>
                    </div>
                </div>
            </div>
        )
    }
}



export default Pokemon;