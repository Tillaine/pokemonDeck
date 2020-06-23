import React from 'react';
import pokeTypes from '../pokeData.js'

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        type: '',
        weakness: '',
        name: ''
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange (e) {
        e.preventDefault();
        const { name, value } = e.target;
        const update = {};
        update[name] = value
        this.setState(update)
    }

    handleSubmit (e) {
        e.preventDefault();
        const filters = {
            weakness: this.state.weakness === '' ? undefined : this.state.weakness,
            type: this.state.type === '' ? undefined : this.state.type,
            name: this.state.name === '' ? undefined : this.state.name,
        }
        this.props.handleSearch(filters)

    }


    render() {
        return (
            <div className="container">
                <h2>Find Challengers</h2>
                <div className="row">
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">

                            <label> Search </label>
                                <input className="form-control" onChange={this.handleChange} name="name"/>
                            <br></br>
                            <label> Type </label>
                                <select className="form-control"  onChange={this.handleChange} name="type" >
                                { pokeTypes.map(type => {
                                    return  (<option key={type} value={type}>{type}</option>)
                                })}
                                </select>
                            <br></br>
                            <label> Weakness </label>
                                <select className="form-control"  onChange={this.handleChange} name="weakness" value={this.state.weakness} >
                                { pokeTypes.map(type => {
                                return  (<option key={type} value={type}>{type}</option>)
                                })}
                                </select>
                                <br></br>
                          
                            <button onSubmit={this.handleSubmit} className="btn btn-success">Apply Filters</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default Search