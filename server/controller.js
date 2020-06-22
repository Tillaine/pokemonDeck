const { searchedPokemon } = require('./model.js')
const {allPokemon } = require('./model.js')

const sendAll = (req, res) => {
    allPokemon()
    .then(allPokemon => {
        console.log(allPokemon)
        res.send(allPokemon)})
}

const sendFiltered = (req, res) => {
    searchedPokemon(req.body)
    .then(matchingPokemon => res.send(matchingPokemon))
}

module.exports = { sendAll, sendFiltered }