import React from 'react'
import './Cockpit.css'

const Cockpit = (props) => {
     // changing css clasName dynamcially
     const classes = [];
     if(props.persons.length < 3)
       classes.push('blue');
     if(props.persons.length < 2)
       classes.push('fc');
    return(
        <div>
            <p className={classes.join(' ')}>This is really working</p>
            <button 
                onClick = {props.toggle}
                className = {props.personState ? 'personState' : 'notPersonState'}
            >Switch Name
            </button>
        </div>
    )
};

export default Cockpit;