import React, {Component} from 'react';
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import TitleBar from './TitleBar/Titlebar';
import AlertUser from './AlertUser/AlertUser';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',
            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly']
        };
    }
    
    alertTheUser = (props) =>{
        alert('devCodeCamp')
    }
   

    render() {
        return (
        <div className="container-fluid">
            <TitleBar />
            <h1> <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/> </h1>
            <ol><NamesList nameList={this.state.names} /> </ol>
            <AlertUser alert={this.alertTheUser}/>
        </div>
        )
    }
}

export default App;