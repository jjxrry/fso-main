import { useState } from 'react'

const Header = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  )
}

const Display = ({anecdotes, index}) => {
  return (
    <>
      {anecdotes[index]}
    </>
  )
}

const VoteCount = ({votesCount}) => {
  return (
    <>
      <p>has {votesCount} votes</p>
    </>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleAnecdotes = () => {
    setSelected(Math.floor((Math.random()*anecdotes.length)))
  }

  const handleVotes = () => {
    const voteCounter = [...votes]
    voteCounter[selected] += 1
    setVotes(voteCounter)
  }

  return (
    <div>
      <Header title={'Anecdote of the Day'}/>
      <Display index = {selected} anecdotes = {anecdotes}/>
      <VoteCount votesCount={votes[selected]}/>
      <Button handleClick={handleAnecdotes} text='next anecdote'/>
      <Button handleClick={handleVotes} text='vote'/>
      {/* <Header title={'Anecdote with most votes'}/>
      <Display index = {selected} anecdotes = {anecdotes}/> */}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often.',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  'The only way to go fast, is to go well.'
]

export default App