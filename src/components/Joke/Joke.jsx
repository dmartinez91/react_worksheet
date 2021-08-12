import React, { Component } from 'react';
import axios from 'axios'



class Joke extends Component {
    state = {  }


    componenet(){
        this.makeGetRequest();
    }

    async makeGetRequest(){
        try{
            let response = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
            console.log(response.data)
        }
        catch (ex){
            console.log(ex);
        }
    }

    render(){
        return (
            <React.Fragment>
            <h1> Async Await Axios Jokes </h1>
            <button onClick={this.makeGetRequest}>Remake Call</button>
            </React.Fragment>
        );
    }
}

export default Joke