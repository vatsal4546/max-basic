import React, { Component } from 'react';
import './App.css';
import Persons from './components/Persons/Persons'

// const App = props => {
//   const [this.state, setPersonState] = useState ({
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Max', age: 28},
//       { name: 'Max', age: 28}
//     ]
//   })
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

      // For static content /////////

      // this.setState({persons: [
      //   { name: 'bb', age: 28},
      //   { name: event.target.value, age: 28},
      //   { name: 'aa', age: 28}
      // ],
      //})
    }
    render() {
      //Inline style
      // const style = {
      //   backgroundColor: 'green',
      //   border: '1px solid blue',
      //   padding: '8px',
      //   cursor: 'pointer',
      //   textAlign: 'center',
      //   margin: 'center',
      //   ':hover': {
      //     backgroundColor: 'lightgreen'
      //   }
      // }
      // changing css clasName dynamcially
      const classes = [];
      if(this.state.persons.length < 3)
        classes.push('blue');
      if(this.state.persons.length < 2)
        classes.push('fc');
      //handling content javascript  way
      let persons = null;
      if (this.state.personState) {
        persons = <div className={classes.join(' ')}>
                     <Persons persons = {this.state.persons}
                     changed = {this.nameChangeHandler}
                     clicked = {this.deleteNameHandler}/>
                  </div>;
        // style.backgroundColor = 'red';
        // style[':hover'] = {
        //   backgroundColor : 'salmon',
        //   color: 'white'
        // }
      }

      return (
          <div className="App">
          <button 
          onClick = {
            this.togglePersonHandler}
          className = {this.state.personState ? 'personState' : 'notPersonState'}
            >Switch Name</button>
          {/* Handlig content react way */}
          {/* {this.state.personState ?
            <div>
            <Person name = {this.state.persons[0].name} 
                    age="28"
                    changed = {this.nameChangeHandler}/>
            <Person name = {this.state.persons[1].name} 
                    age= "26">My Hobbies: Racing</Person>
            <Person name = {this.state.persons[2].name} 
                    age="27"/>
          </div> : null
          } */}
          {persons}
        </div>
      );
    }
  }

export default App;

// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28},
//       { name: 'Max', age: 28},
//       { name: 'Max', age: 28}
//     ],
//   }
// switchNameHandler = () => {
//   this.setState({
//     persons: 
//   })
// }