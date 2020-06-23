import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import List from './List.jsx';


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        foundPokemon: [],
        searched: false   
      } 
      this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch (params) {
      let url = `http://localhost:3000/api/pokemon?`
      Object.keys(params).forEach(param => {
        if( params[param] !== undefined ) {
          url += `${param}=${params[param]}&`
        }
      })
      url = url.slice(0, url.length -1)
      console.log('url', url)
      fetch(url)
      .then(pokemon => pokemon.json())
      .then(foundPokemon => {
        this.setState({ foundPokemon, searched: true })
        console.log(this.state)})
      .catch(err => console.log(err))
    }
  
    render () {
      return (
        <div>
          <Header/>
          <Search handleSearch={this.handleSearch}/>
          <List searched={this.state.searched} fighters={this.state.foundPokemon}/>
            
        </div>
        )
  
    }
  }

  export default App