import React from 'react';
import pokeTypes from '../pokeData.js'

class Filter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        types: [],
        weaknesses: [],
        name: ''
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleFilter = this.handleFilter.bind(this)

    }

    handleFilter (e) {
        e.preventDefault();
        const { name, value } = e.target;
        const update = {};
        update[name] = this.state[name];
        update[name].push(value);
        this.setState({update})
        console.log(this.state)
    }


    handleSubmit (e) {
        e.preventDefault();
        const params = this.state;
        this.props.Submit(params)
        this.setState({weaknesses: [], types: []})
    }


    render() {
        return (
            <div className="container filter">
                <form>
                        <div className="form-group">
                            <h2>Filter</h2>
                            <label> Type </label>
                                <select className="form-control"  onChange={this.handleFilter} name="types" >
                                { pokeTypes.map(type => {
                                    return  (<option key={type} value={type}>{type}</option>)
                                })}
                                </select>
                                <p>Selected Types: <span className="filters"> {this.state.types.join(', ')}</span></p>
                            <label> Weakness </label>
                                <select className="form-control"  onChange={this.handleFilter} name="weaknesses" value={this.state.weakness}>
                                { pokeTypes.map(type => {
                                return  (<option key={type} value={type}>{type}</option>)
                                })}
                                </select>
                                <p>Selected Weaknesses: <span className="filters"> {this.state.weaknesses.join(', ')}</span></p>
                          
                            <button onClick={this.handleSubmit} className="btn btn-success">Apply Filters</button>
                        </div>
                    </form>
            </div>
        )
    }
}



export default Filter