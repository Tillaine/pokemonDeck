const fetch = require('node-fetch');
const { model } = require('mongoose');

const searchedPokemon = (terms) =>  {
    return fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then(res => res.text())
        .then(body => results = JSON.parse(body))
        .then(body => {
            const filteredPokemon = filterPokemon(terms, body.pokemon)
            return filteredPokemon;
        })
        .catch(err => console.log(err));
}

const allPokemon = () => {
    return fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json')
        .then(res => res.text())
        .then(allPokemon => results = JSON.parse(allPokemon))
        .then(allPokemon => allPokemon)
        .catch(err => console.log(err));

}
const filterPokemon = (terms, pokemon) => {
    let results = pokemon;
    const { weakness, type, name } = terms;
    if ( name ) {
        return filteredPokemon = results.filter(pokemon => {
            return pokemon.name.includes(name)
        })
    } 
    if ( type ) {
        results = results.filter(pokemon => {
            return pokemon.type.includes(type)
        })
    }
    
    if ( weakness ) {
        results = results.filter(pokemon => {
            return pokemon.weaknesses.includes(weakness)
        })
    }
    return results
}




module.exports = { searchedPokemon, allPokemon }