import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todos from './components/Todos.jsx'
import UpdateTodo from './components/UpdateTodo.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Learn About Redux Toolkit</h1>
    <AddTodo />
    <Todos />
    <UpdateTodo todo={{ id: 1, text: "Hello world" }} />
    </>
  )
}

export default App
