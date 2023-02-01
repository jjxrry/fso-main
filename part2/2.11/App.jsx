import { useEffect, useState } from 'react'
import axios from 'axios'
import Note from './components/Note'
import Filter from './components/Filter'
import Submit from './components/Submit'

const App = ({contacts}) => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('enter name here')
  const [newNumber, setNewNumber] = useState('(123)457-8213')
  const [newFilter, setNewFilter] = useState('');

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }

  useEffect(hook, []);

  const addContact = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1,
      number: newNumber,
    }
    if(persons.find(item => item.name === newName) || persons.find(item => item.number === newNumber)){
      return (alert(`${newName} is already added to phonebook`))
    }
    return (
      setPersons(persons.concat(nameObject)), setNewName(''), setNewNumber('')
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
        <Note person={person}/>
      )}
    </div>
  )
}

export default App