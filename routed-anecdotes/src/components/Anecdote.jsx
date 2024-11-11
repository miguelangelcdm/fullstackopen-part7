const Anecdote = ({ anecdote }) => {
  return (
    <div>
      <h2>{anecdote.content}</h2>
      <div>has {anecdote.votes ? anecdote.votes : 0} votes</div>
      
    </div>
  )
}

export default Anecdote