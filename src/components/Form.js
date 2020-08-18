import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'
import shortid from 'shortid'

const Form = ({ setExpense }) => {
  // state for onChange input's
  const [expenseName, setExpenseName] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')
  // Error state.
  const [error, setError] = useState(false)

  // handle on submit form.
  const handleOnSubmit = e => {
    e.preventDefault()

    // Validate
    if (expenseAmount < 1 || isNaN(expenseAmount) || !expenseName.trim()) {
      setError(true)
      return
    }
    setError(false)
    // create expense
    const expense = {
      id: shortid.generate(),
      expenseName,
      expenseAmount
    }
    // bubble up the expense
    setExpense(expense)
    // reset form
    setExpenseName('')
    setExpenseAmount(0)
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Agrega tus gastos</h2>
      {error && <Error message='Ambos campos son obligatorios o Presupuesto incorrecto.' />}
      <div className='campo'>
        <label htmlFor=''>Nombre Gasto</label>
        <input
          type='text'
          id='input-expense'
          className='u-full-width'
          placeholder='Ej. Transporte'
          name='expense'
          value={expenseName}
          onChange={e => setExpenseName(e.target.value)}
        />
      </div>
      <div className='campo'>
        <label htmlFor=''>Cantidad Gasto</label>
        <input
          type='number'
          id='input-expenseAmount'
          className='u-full-width'
          placeholder='Ej. 300'
          name='expenseAmount'
          value={expenseAmount}
          onChange={e => setExpenseAmount(parseInt(e.target.value), 10)}
        />
      </div>

      <input type='submit' className='button-primary u-full-width' />
    </form>
  )
}

Form.propTypes = {
  setExpense: PropTypes.func.isRequired
}

export default Form
