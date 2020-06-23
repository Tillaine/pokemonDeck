import React from 'react';
import Header from './Header.jsx';
import Filter from './Filter.jsx';
import List from './List.jsx';
import { filterPokemon } from '../filterPokemon'



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        foundPokemon: [],
      } 
      this.handleSubmit = this.handleSubmit.bind(this);
      this.getPokemon = this.getPokemon.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.handleRest = this.handleRest.bind(this);
    }

    componentDidMount () {
      this.getPokemon();
    }

    handleSearch (name) {
      const targetPokemon = this.state.foundPokemon.filter(pokemon => {
        return pokemon.name.toLowerCase() === name.toLowerCase();
      })
      this.setState({foundPokemon: targetPokemon})
    }

    handleSubmit (params) {
      console.log(params)
      const refined = filterPokemon(params, this.state.foundPokemon)
      this.setState({ foundPokemon: refined })
    }

    handleRest(e) {
      e.preventDefault();
      this.getPokemon();
    }

    getPokemon () {
      let url = `http://localhost:3000/api/pokemon`
      fetch(url)
      .then(pokemon => pokemon.json())
      .then(foundPokemon => {
        this.setState({ foundPokemon: foundPokemon.pokemon })
        })
      .catch(err => console.log(err))
    }
  
    render () {
      return (
            <div className='container'>
                <Header handleSearch={this.handleSearch} />
                <Filter Submit={this.handleSubmit}/>
                <List fighters={this.state.foundPokemon} reset={this.handleRest}/>
            </div>
        )
  
    }
  }

  export default App