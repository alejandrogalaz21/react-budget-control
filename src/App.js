import React, { Fragment, useState } from 'react'
import Question from './components/Question'
import Form from './components/Form'

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

          <div className='row '>
            <div className='row one-half column'>
              <Form />
            </div>
            <div className='row one-half column'>2</div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
