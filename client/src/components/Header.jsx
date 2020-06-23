import React from 'react';

class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: ''
      }
      this.handleSearch = this.handleSearch.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }

    handleSearch (e) {
        e.preventDefault();
        console.log('name', this.state.name)
        this.props.handleSearch(this.state.name)
        this.setState({ name: '' })
    }

    handleChange (e) {
        e.preventDefault();
        const { value } = e.target;
        this.setState({name: value})
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron vertical-center">
                    <h1>PokeDex</h1>
                    <div className="row">
                        <img className="pokeDexImg" width='300px' src="./pokedex.png"/>
                        <div>
                            <div>
                                <form>
                                    <div className="form-group">
                                        <div className="card search">
                                            <input className="form-control nameSearch" placeholder=" 🔎  ex: Squirtle" onChange={this.handleChange} name="name"/> 
                                            <button onClick={this.handleSearch} className="btn btn-small btn-primary">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}


export default Header;
