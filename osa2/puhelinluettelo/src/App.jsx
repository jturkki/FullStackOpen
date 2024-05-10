import { useState } from 'react'

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


  const Persons = ({ personsToShow }) => {
    
    return (
      <div>
        {personsToShow.map(person =>
          <p key={person.name}>{person.name} {person.number}  </p>
          )
        }
      </div>
    )
  }

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '080 123456' },
    { name: 'Jyri Turkki', number: '040000000'},
    { name: 'Hesus Hoo', number: '55332-2334'},
    { name: 'Javier Bee', number: '777777777'}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)



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
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
      
    }
    else {
      alert(`${newName} is already added to the phonebook`)
      setNewName('')
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

      <Filter newFilter = {newFilter}
              handleFilterChange = {handleFilterChange} />
      
      <h2>add a new</h2>

      <PersonForm addPerson ={addPerson}
            newName = {newName}
            handleNameChange = {handleNameChange} 
            newNumber = {newNumber}
            handleNumberChange = {handleNumberChange} />

      <h3>Numbers</h3>

      <Persons personsToShow = {personsToShow} />
      
    </div>
  )
}

export default App