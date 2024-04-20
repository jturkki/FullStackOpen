import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint16Array(8))

  const Button = ({ handleClick, text }) => {
    console.log(text)
    return (
      <button onClick={handleClick}>
        {text}
      </button>
    )
  }


  const handleNextClick = () => {
    const randomNumber = Math.floor(Math.random() * 8);
    console.log('randomNumber', randomNumber)
    setSelected(randomNumber)
    console.log('points now', points)
  }

  
  const handleVoteClick = () => {
    const copy = [...points]
    console.log('copy', copy)
    copy[selected] += 1
    console.log('copy after', copy)
    setPoints(copy)
    console.log('points', points)
  }

  const Header = (props) => {
    return (
      <h1>{props.header}</h1>
    )
  }

  const suurin = Math.max(...points)

  return (
    <div>
      <Header header='Anecdote of the day' />
      <p> {anecdotes[selected]} </p>
      <p>has {points[selected]} votes</p>
      <Button handleClick={handleVoteClick} text ='Vote' />
      <Button handleClick={handleNextClick} text='Next anecdote' />
      <Header header='Anecdote with the most votes' />
      <p> {anecdotes[points.indexOf(suurin)]}</p>
      <p>has {points[points.indexOf(suurin)]} votes</p>
    </div>
  )
  
}

export default App
