import { useState } from "react"

const History = (props) => {
  if (props.allClikcs.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClikcs.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)


const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClikcs, setAll] = useState([])  


  const handleLeftClick = () => {
  setAll(allClikcs.concat('L'))
  const updatedLeft = left + 1
  setLeft(updatedLeft)
}

const handleRightClick = () => {
  setAll(allClikcs.concat('R'))
  const updatedRight = right +1
  setRight(updatedRight)
}


return (
  <div>
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>

      <Button handleClick={handleRightClick} text='right' />
      {right}

      <History allClikcs={allClikcs} />
    </div>
  </div>
)
}


export default App
