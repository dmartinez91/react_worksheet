import React, { Component } from 'react';
import './SuperheroForm.css'

class SuperheroForm extends Component {

    constructor(props) { 
        super(props);
        this.state = {
            superheroId: '',
            name: '',
            primaryAbility: '',
            secondaryAbility: ''


        }
    }
    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.superCreate(this.state)
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <label> Superhero ID</label>
                <input name="superheroId" onChange={this.handleChange} value={this.state.superheroId} />
                <label> Superhero Name</label>
                <input name="name" onChange={this.handleChange} value={this.state.name} />
                <label> Superhero Primary Ability</label>
                <input name="primaryAbility" onChange={this.handleChange} value={this.state.primaryAbility} />
                <label> Superhero Secondary Ability</label>
                <input name="secondaryAbility" onChange={this.handleChange} value={this.state.secondaryAbility} />
                <button type="submit">Create Superhero</button>

            </form>
        )
    }

}

export default SuperheroForm;
