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


const StatisticLine = (props) => {
  console.log('StatisticLine props', props)
  return (
  <tr>
    <td>{props.text}</td>
    <td> {props.value}</td>
  </tr>
 )
}


const Statistics = (props) => { 
  console.log(props)
  const allClicks = (props.good + props.neutral + props.bad)
  const positive = (props.good/allClicks *100) + '%'

  console.log('allClicks', allClicks)

  if (allClicks === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <table>
        <tbody>         
          <StatisticLine text= 'Good' value = {props.good} />
          <StatisticLine text= 'Neutral' value = {props.neutral} /> 
          <StatisticLine text= 'Bad' value = {props.bad} /> 
          <StatisticLine text= 'All' value = {allClicks} /> 
          <StatisticLine text= 'Average' value = {(props.good - props.bad)/allClicks} /> 
          <StatisticLine text= 'Positive' value = {positive} />
        </tbody>
      </table>
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
