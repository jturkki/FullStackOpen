import { useState, useEffect } from 'react'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification'
import ErrorMessage from './components/ErrorMessage'


const Filter =({ newFilter, handleFilterChange}) => {

  return (
    <div>
      filter shown with <input value={newFilter} onChange={handleFilterChange} />
    </div>
  )
}

const PersonForm =({ addPerson, newName, handleNameChange, newNumber, handleNumberChange }) => {
  console.log('Form: newName', newName)
  console.log('Form: newNumber', newNumber)
  
  return (
    <div>
          <form onSubmit={addPerson}>
            <div>
              name: <input value={newName}
              onChange={handleNameChange}
              />
            </div>
            <div>
              number: <input value={newNumber} 
              onChange={handleNumberChange}
              />
            </div>
            <div>
              <button type="submit">add</button>
            </div>
          </form>
      </div>
      )
    }


  const Persons = ({ personsToShow, deletePerson }) => {
    
    return (
      <div>
        {personsToShow.map(person =>
          <p key={person.id}>{person.name} {person.number}  
          <button onClick={() => {deletePerson(person.id)}}>Delete</button>  </p>
          )
        }
      </div>
    )
  }

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [notification, setNotification] =  useState(null)
  const [errorMessage, setErrorMessage] = useState(null)  
  
  

  const hook = () =>{
    console.log('effect')
    
    personService
      .getAll()
      .then(initialPersons => {
        console.log('promise fullfilled')
        setPersons(initialPersons)
      })
  }

  useEffect(hook, [])
  console.log('render', persons.length, 'persons')
  

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newName,
      number: newNumber
    }
    console.log('personObject', personObject)
    
    const duplicateName = persons.find(person => person.name === newName)
    console.log('duplicateName', duplicateName)

    if (!duplicateName) {
    
      personService
        .create(personObject)
        .then(addedPerson => {
          setPersons(persons.concat(addedPerson))
          setNewName('')
          setNewNumber('')
          setNotification(`Added ${addedPerson.name} `)
          setTimeout(() => {
            setNotification(null)
          },5000)
        })

      
    }
    else {
      if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
        
        console.log('duplicateName.id', duplicateName.id)
      
        personService
          .updateNumber(duplicateName.id, personObject)
          .then(updatedPerson => {
            setPersons(persons.map(p => p.id !== updatedPerson.id ? p : updatedPerson))
            setNewNumber('')
            setNotification(`Updated ${updatedPerson.name} `)
            setTimeout(() => {
              setNotification(null)
            },5000)
          })
          .catch(error => {
            setErrorMessage(
              `Information of ${duplicateName.name} has already been removed from server`
            )
            setTimeout(() => {
              setErrorMessage(null)
            },5000)
            setPersons(persons.filter(n => n.id !== duplicateName.id))
          })
      }
      setNewName('')
    }
  }


  const deletePerson = id => {
    console.log('delete person id ', id)
    const personToDelete = persons.find(p => p.id === id)
    if (window.confirm(`Delete ${personToDelete.name}? `)) {
      personService
      .deletePerson(id)
      .then(deletedPerson => {
        setPersons(persons.filter(n => n.id !== id))
        setNotification(`Deleted ${deletedPerson.name} `)
            setTimeout(() => {
              setNotification(null)
            },5000)
      })
    }    
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
    console.log('event target value length', event.target.value.length)
    
    event.target.value.length > 0
      ? setShowAll(false)
      : setShowAll(true)
  }
    
  
  const personsToShow = showAll
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))


  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notification} />
      <ErrorMessage message={errorMessage} />

      <Filter newFilter = {newFilter}
              handleFilterChange = {handleFilterChange} />
      
      <h2>add a new</h2>

      <PersonForm addPerson ={addPerson}
            newName = {newName}
            handleNameChange = {handleNameChange} 
            newNumber = {newNumber}
            handleNumberChange = {handleNumberChange} />

      <h3>Numbers</h3>

      <Persons personsToShow = {personsToShow}
              deletePerson={deletePerson} />
      
    </div>
  )
}

export default App