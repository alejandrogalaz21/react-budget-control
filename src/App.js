import React, { Fragment, useState } from 'react'
import Question from './components/Question'
import Form from './components/Form'

function App() {
  // Define the state
  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [expenses, setExpenses] = useState('')

  const handleSetExpense = expense => {
    setExpenses([...expenses, expense])
  }

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          {showQuestion ? (
            <Question
              setBudget={setBudget}
              setRest={setRest}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className='row '>
              <div className='row one-half column'>
                <Form setExpense={handleSetExpense} />
              </div>
              <div className='row one-half column'>2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
