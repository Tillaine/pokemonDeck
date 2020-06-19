import React from 'react';

const Header = (props) => {
    return (
        <div className="container">
            <div className="jumbotron vertical-center">
                <h1>PokeDex</h1>
                <div className="row">
                    <img className="pokeDexImg" width='400px' src="./pokedex.png"/>
                </div>
            </div>
        </div>
    )
    
}

export default Header;
