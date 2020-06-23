import React from 'react';


class Details extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e) {
        this.props.close();
    }
    
    render() {
        const pokemon = this.props.pokemon;
        return (
            <div id={pokemon.name} className="card">
                <p>Type: {pokemon.type.join(', ')}</p>
                            
                    </div>
        )
    }
}



export default Details