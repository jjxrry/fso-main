import { useState } from 'react'
import Note from './components/Note'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('enter name here')
  const [newNumber, setNewNumber] = useState('(123)457-8213')


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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {persons.map(person =>
          <Note person={person}/>
        )}
    </div>
  )
}

export default App