import { useState } from "react"

const Header = (props) => {
  console.log(props)
  return (
    <h1> {props.header} </h1>
  )
}

const Button = ({ handleClick, text }) => {
  console.log(handleClick, text)
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = (props) => { 
  console.log(props)
  return (
    <div>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
    </div>
  )
}

const App = () => {
 
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good +1
    console.log('updatedGood', updatedGood)    
    setGood(updatedGood)
  }

  const handleNeutralClick = () => { 
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
  }

  return (
      <div>
        <Header header='give feedback' />
        <Button handleClick={handleGoodClick} text='Good' />
        <Button handleClick={handleNeutralClick} text='Neutral' />
        <Button handleClick={handleBadClick} text='Bad' />

        <Header header='statistics' />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

export default App
