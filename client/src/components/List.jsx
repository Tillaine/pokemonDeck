import React from 'react';
import Pokemon from './Pokemon.jsx'

const List = (props) => {
    const view = props.searched;

    if (view) {
       return (
           
           <div className="container">
            {props.fighters.map(pokemon => {
                return (
                    <Pokemon pokemon={pokemon} />
                    
                    )
                })}
                </div>)
    } else {
        return (
            <div className="container">
                <div className="card">
                        <h1>Search or filter to find the best challenger</h1>
                </div>
                
            </div>
        )

    }
    
    
}

export default List;
