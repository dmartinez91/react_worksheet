import React, { Component } from 'react';
import axios from 'axios'


class Joke extends Component {
    state = { 
        jokes: []
     }


    componentDidMount(){
        this.makeGetRequest();
    }

    async makeGetRequest(){
        try{
            let response = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
            console.log(response.data)
            this.setState({
                jokes: response.data
            });
        }
        catch (ex){
            console.log(ex);
        }
    }
    

    render(){
        return (
            <React.Fragment>
                {console.log('state', this.state)}
              
    
                {this.state.jokes.map(jokes => (
                        
                    <h4 key={jokes.id}>
                        <h4> {jokes.setup} </h4>
                        <h4> {jokes.punchline} </h4>
                    </h4>

                    ))}
                
            </React.Fragment>
        );
    }
}

export default Joke