import { useEffect, useState } from 'react'
import Note from './components/Note'
import Filter from './components/Filter'
import Submit from './components/Submit'
import noteService from './services/notes'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('enter name here')
  const [newNumber, setNewNumber] = useState('(123)457-8213')
  const [newFilter, setNewFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

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
  
  const deleteContact =(id) => {
    const deleted = persons.find(n => n.id === id)
    noteService
      .deletion(deleted)
      .then(() => window.alert(`contact ${deleted.name} has been deleted`))
      .catch(error => {
        setErrorMessage(
          `Contact ${deleted.name} was already deleted.`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setPersons(persons.filter(n => n.id !== id))
      })
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
        deleteContact={() => deleteContact(person.id)}
        />
        )}
      <Notification message={errorMessage} />
    </div>
  )
}

export default App