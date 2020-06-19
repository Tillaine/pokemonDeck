import React from 'react';
import Header from './Header.jsx';
import Search from './Search.jsx'


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        foundPokemon: []   
      } 
    }
  
    render () {
      return (
        <div>
          <Header/>
          <Search/>
            
        </div>
        )
  
    }
  }

  export default App