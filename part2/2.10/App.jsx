import { useState } from 'react'
import Note from './components/Note'
import Filter from './components/Filter'
import Submit from './components/Submit'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('enter name here')
  const [newNumber, setNewNumber] = useState('(123)457-8213')
  const [newFilter, setNewFilter] = useState('');

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