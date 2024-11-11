import { useState } from 'react'
import { useMatch, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import About from './components/Info'
import Footer from './components/Footer'
import Anecdote from './components/Anecdote'
import Notification from './components/Notification'

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`A new anecdote "${anecdote.content}" was created!`)
    setTimeout(() => {
      setNotification('')
    }, 5000)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }
  
  const padding = {
    padding: 5
  }
  
  const match = useMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find(anecdote => anecdote.id === Number(match.params.id))
    : null
  
  return (
  <>
    <h1>Software anecdotes</h1>
    <div>
      <Link style={padding} to={"/"}>anecdotes</Link>
      <Link style={padding} to={"/create"}>create new</Link>
      <Link style={padding} to={"/about"}>about</Link>
    </div>
    <Notification message={notification}/>
    
    <Routes>
      <Route path='/' element={<Home anecdotes={anecdotes}  />}/>
      <Route path='/create' element={<Create addNew={addNew}/>}/>
      <Route path='/info' element={<About />}/>
      <Route path='/anecdotes/:id' element={<Anecdote anecdote={anecdote} />}/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App
