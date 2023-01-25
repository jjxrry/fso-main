import { useState } from 'react'

const Display = () => {
  return(
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Stats = (props) => {
  console.log(props.good)
  return (
    <>
      <h1>statistics</h1>
      <p>good:{props.good}</p>
      <p>neutral:{props.neutral}</p>
      <p>bad:{props.bad}</p>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)



const App = () => {
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad: 0,
  })

  const handleGood = () => {
    const newClicks = {
      ...clicks,
      good: clicks.good + 1
    }
    setClicks(newClicks)
  }

  const handleNeutral = () => {
    const newClicks = {
      ...clicks,
      neutral: clicks.neutral + 1
    }
    setClicks(newClicks)
  }

  const handleBad = () => {
    const newClicks = {
      ...clicks,
      bad: clicks.bad + 1
    }
    setClicks(newClicks)
  }
  
  return (
    <div>
      <Display />
      <Button handleClick={handleGood} text="good" />
      <Button handleClick={handleNeutral} text="netural" />
      <Button handleClick={handleBad} text="bad" />
      <Stats good = {clicks.good} bad = {clicks.bad} neutral = {clicks.neutral}/>
    </div>
  )
}

export default App