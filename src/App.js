import React, { Fragment, useState } from 'react'
import Question from './components/Question'

function App() {
  // Define the state
  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>

        <div className='contenido-principal contenido'>
          <Question setBudget={setBudget} setRest={setRest} />
        </div>
      </header>
    </div>
  )
}

export default App
