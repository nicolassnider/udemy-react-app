import React from 'react'
import Person from './Person/Person'

const persons = (props) => props.persons.map((person, index) => {
    console.log("props: ", props);
    return <Person
        click={() => props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={(event) => props.nameChangedHandler(event, person.id)}
    />
});