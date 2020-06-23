const filterPokemon = (terms, pokemon) => {
    let results = pokemon;
    const { weaknesses, types } = terms;

    if ( types.length ) {
        types.map(type => {
            results = results.filter(pokemon => {
                return pokemon.type.includes(type)
            })
        })
    }
    
    if ( weaknesses.length ) {
        weaknesses.map(weakness => {
            results = results.filter(pokemon => {
                return pokemon.weaknesses.includes(weakness)
            })
        })
    }
    console.log('results',results)
    return results
}
module.exports = { filterPokemon } 