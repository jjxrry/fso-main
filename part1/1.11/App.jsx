import { useState } from 'react'

const Display = () => {
  return(
    <div>
      <h1>give feedback</h1>
    </div>
  )
}

const Stats = (props) => {
  if (props.good === 0  && props.neutral === 0 && props.bad === 0){
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.good + props.neutral + props.bad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{(props.good - props.bad)/(props.good + props.neutral + props.bad)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{(((props.good)/ (props.good + props.neutral + props.bad)) * 100)+ "%"}</td>
        </tr>
      </table>
      {/* <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.good + props.neutral + props.bad} />
      <StatisticLine text="average" value ={(props.good - props.bad)/(props.good + props.neutral + props.bad)} />
      <StatisticLine text="positive" value ={(((props.good)/ (props.good + props.neutral + props.bad)) * 100)+ "%"} /> */}
    </>
  )
}

const StatisticLine = (props) => <p>{props.text}: {props.value}</p>


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