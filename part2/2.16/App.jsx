import { useEffect, useState } from 'react'
import Note from './components/Note'
import Filter from './components/Filter'
import Submit from './components/Submit'
import noteService from './services/notes'
import Success from './components/Success'
import Error from './components/Error'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('enter name here')
  const [newNumber, setNewNumber] = useState('(123)457-8213')
  const [newFilter, setNewFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

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
      const contact = persons.find(p => p.name === nameObject.name)
      const changedContact = { ...contact, number: newNumber}

      return (
        noteService
          .replace(newName, changedContact)
          .then(() => {
            setSuccessMessage(`${newName} number has been updated`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 4000)
            setPersons(persons)
            setNewName('')
            setNewNumber('')
          })
        )
    }
    noteService
      .create(nameObject)
      .then(returnContact => {
        setSuccessMessage(`${newName} number has been added`)
        setTimeout(() => {
          setSuccessMessage(null)
        }, 4000)
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
      .then(() => 
        setSuccessMessage(`contact ${deleted.name} has been deleted`))
      .catch(() => {
        setErrorMessage(
          `Contact ${deleted.name} was already deleted.`
        )
        setTimeout(() => {
          setErrorMessage(null)
          setSuccessMessage(null)
        }, 4000)
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
      <Error message={errorMessage} />
      <Success message={successMessage}/>
      <Submit addContact={addContact} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumChange={handleNumChange}/>
      <h2>Numbers</h2>
      {persons.filter(user => user.name.toLowerCase().includes(newFilter)).map(person =>
        <Note 
        key={person.id}
        person={person}
        deleteContact={() => deleteContact(person.id)}
        />
        )}
    </div>
  )
}

export default App