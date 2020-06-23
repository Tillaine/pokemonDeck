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
        if(this.props.show) {
            return (
                <div id={pokemon.name} className="card">
                    <p>Type: {pokemon.type.join(', ')}</p>  
                    <button onClick={this.props.close} className="btn btn-sm btn-warning">x</button>              
                </div>
            )
        } else {
            return (
                <div>
                    <button onClick={this.props.handleDetails} className='btn btn-success'>Details</button>
                </div>
            )
        }

        
    }
}



export default Details