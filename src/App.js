import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons/Persons'
import Cockpit from './components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      { id: 1, name: 'Max', age: 28},
      { id: 2, name: 'Max', age: 28},
      { id: 3, name: 'Max', age: 28}
    ],
    personState: false
  }
   switchNameHandler = () => {
    this.setState({persons: [
      { name: 'Vat', age: 28},
      { name: 'Max', age: 28},
      { name: 'Fal', age: 28}
    ],
   })
  }

  togglePersonHandler = () => {
    const show = this.state.personState;
    this.setState({personState: !show})
  }

  deleteNameHandler = (index) => {
    // const persons = this.state.persons; 
    // Never try this way don't try it by mutatating always create a copy for it
    let persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons})
  }

   nameChangeHandler = (event, id) => {
     // Getting the specifc elements or list of elements on which change operation is to be done
    const personIndex = this.state.persons.findIndex(p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    }

    // OR
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    
    this.setState({
      persons: persons
    })

    }
    render() {
      //handling content javascript  way
      let persons = null;
      if (this.state.personState) {
        persons = <div>
                     <Persons persons = {this.state.persons}
                     changed = {this.nameChangeHandler}
                     clicked = {this.deleteNameHandler}/>
                  </div>;
      }

      return (
          <div className="App">
          <Cockpit toggle = {this.togglePersonHandler}
                   personState = {this.state.personState}
                   persons = {this.state.persons}
          /> 
          {persons}
        </div>
      );
    }
  }

export default App;
