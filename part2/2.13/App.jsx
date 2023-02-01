import { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'
import Filter from './components/Filter'
import Submit from './components/Submit'
import noteService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('enter name here')
  const [newNumber, setNewNumber] = useState('(123)457-8213')
  const [newFilter, setNewFilter] = useState('');

  useEffect(() => {
    noteService
      .getAll()
      .then(initialContact => {
        setPersons(initialContact)
      })
  }, []);

  const addContact = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
    }
    if(persons.find(item => item.name === newName) ||
    persons.find(item => item.number === newNumber)){
      return (alert(`${newName} is already added to phonebook`))
    }
    noteService
      .create(nameObject)
      .then(returnContact => {
        setPersons(persons.concat(returnContact))
        setNewName('')
        setNewNumber('')
      }
      )
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilter={handleFilter}/>
      <h2>Add a new contact</h2>
      <Submit addContact={addContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumChange={handleNumChange}/>
      <h2>Numbers</h2>
      {persons.filter(user => user.name.toLowerCase().includes(newFilter)).map(person =>
        <Note 
          key={person.id}
          person={person}
        />
      )}
    </div>
  )
}

export default App