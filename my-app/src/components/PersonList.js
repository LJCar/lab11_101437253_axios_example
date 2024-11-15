import React, { Component } from 'react';
import axios from 'axios';

class PersonList extends Component {
    // Define state default values
    state = {
        persons: []
    };

    // Component Lifecycle Callback
    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                console.log(res.data);
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("There was an error fetching data!", error);
            });
    }

    render() {
        return (
            <div>
                <h2>Person List</h2>
                {this.state.persons.map(person => (
                    <div key={person.login.uuid}>
                        {person.name.first} {person.name.last}
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;