import React from 'react';

class Pokemon extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selected: false,
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleDetailClose = this.handleDetailClose.bind(this)

    }

    handleDetailClose() {
        this.setState({selected: false})
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
                </div>
            </div>
        )
    }
}

const Details = (props) => {
    const { pokemon } = props;
    return (
        <div id={pokemon.name} className="card">
                     <h1>{pokemon.name}</h1>
                     <img width="150px" src={pokemon.img}/>
                     
                </div>
    )
}

export default Pokemon;