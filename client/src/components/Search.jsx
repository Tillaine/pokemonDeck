import React from 'react';
import pokeTypes from '../pokeData.js'

{console.log(pokeTypes)}

class Search extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        type: '',
        weakness: '',
        name: ''
      }
    }


    render() {
        return (
            <div className="container">
                <h2>Find Challengers</h2>
                <div className="row">
                    
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">

                            <label> Search </label>
                                <input className="form-control" onChange={this.handleChange} name="name" value={this.state.name}/>
                            <br></br>
                            <label> Type </label>
                                <select className="form-control"  onChange={this.handleChange} name="currentStep" value={this.state.currentStep} >
                                { pokeTypes.map(type => {
                                    return  (<option value={type}>{type}</option>)
                                })}
                                </select>
                           
                            <br></br>
                            <label> Weakness </label>
                                <select className="form-control"  onChange={this.handleChange} name="currentStep" value={this.state.currentStep} >
                                { pokeTypes.map(type => {
                                return  (<option value={type}>{type}</option>)
                                })}
                                </select>
                                <br></br>
                          
                            <button className="btn btn-success">Apply Filters</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default Search