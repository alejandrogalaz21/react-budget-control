import React, { useState, useEffect } from 'react'
import Question from './components/Question'
import Form from './components/Form'
import List from './components/List'
import Control from './components/Control'

function App() {
  // Define the state
  const [budget, setBudget] = useState(0)
  const [rest, setRest] = useState(0)
  const [showQuestion, setShowQuestion] = useState(true)
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState({})
  const [AddExpense, setAddExpense] = useState(false)

  useEffect(() => {
    if (AddExpense) {
      // add new expense to the list
      setExpenses([...expenses, expense])

      // subtraction from current budget
      const subtraction = rest - expense.expenseAmount
      setRest(subtraction)

      // set to false
      setAddExpense(false)
    }
  }, [expense, expenses, rest, AddExpense])

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
                <Form setExpense={setExpense} setAddExpense={setAddExpense} />
              </div>
              <div className='row one-half column'>
                <List expenses={expenses} />
                <Control budget={budget} rest={rest} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
