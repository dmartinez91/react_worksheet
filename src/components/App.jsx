import React, {Component} from 'react';
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import TitleBar from './TitleBar/Titlebar';
import AlertUser from './AlertUser/AlertUser';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import SuperheroForm from './SuperheroForm/SuperheroForm';
import Joke from './Joke/Joke';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],
            superheroNumber: 0,
            superheroes: [
                {
                    superheroId: 1,
                    name: 'Batman',
                    primaryAbility: 'Wealthy',
                    secondaryAbility: 'Rich'
                },
                {
                    superheroId: 2,
                    name: 'Superman',
                    primaryAbility: 'Super strength',
                    secondaryAbility: 'Fly'
                },
                {
                    superheroId: 3,
                    name: 'Spiderman',
                    primaryAbility: 'Spider senses',
                    secondaryAbility: 'Shoots web'
                }
            ]
        };
    }
    
    alertTheUser = (props) =>{
        alert('devCodeCamp')
    }

    superCreate = (newSuper) =>{
        console.log('from the create SuperheroForm component', newSuper);
        this.state.superheroes.push(newSuper);
        this.setState({
            superheroNumber: this.state.superheroes.length - 1
        })
    }
   

    render() {
        return (
        <div className="container-fluid">
            <TitleBar />
            <h1> <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/> </h1>
            <ol><NamesList nameList={this.state.names} /> </ol>
            <AlertUser alert={this.alertTheUser}/>
            <SuperheroTable superTable={this.state.superheroes}/>
            <SuperheroForm superCreate={this.superCreate}/>
            <Joke funny={this.Joke}/>
            


        </div>
        )
    }
}

export default App;