import React from 'react';
import Pokemon from './Pokemon.jsx';

const List = (props) => {

    if (props.fighters.length) {
       return (
           <div className="container ">
                <div className='row'>                    
                    {props.fighters.map(pokemon => <Pokemon key={pokemon.num} pokemon={pokemon} />)}

                </div>
                </div>)
    } else {
        return (
            <div className="container">
                    <div className="card noPokemone">
                        <img width='250px' src="https://www.mypokecard.com/my/galery/lGuoJnQqYMhl.jpg"/>
                        <h3>We have never seen that kind of pokemon. 🤔Try differnet filters. </h3>
                        <button onClick={props.reset} className='btn btn-primary btn small'>Reset Filters</button>
                </div>
                
            </div>
        )

    }
    
    
}

export default List;
