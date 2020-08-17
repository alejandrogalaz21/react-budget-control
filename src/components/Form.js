import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = ({}) => {
  const [expense, setExpense] = useState('')
  const [exprenseAmount, setExprenseAmount] = useState('')

  // handle on submit form.
  const handleOnSubmit = e => {
    e.preventDefault()

    // Validate

    // create expense

    // bubble up the expense

    // reset form
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>Agrega tus gastos</h2>
      <div className='campo'>
        <label htmlFor=''>Nombre Gasto</label>
        <input
          type='text'
          id='input-expense'
          className='u-full-width'
          placeholder='Ej. Transporte'
          name='expense'
          value={expense}
          onChange={e => setExpense(e.target.value)}
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
          value={exprenseAmount}
          onChange={e => setExpense(parseInt(e.target.value), 10)}
        />
      </div>

      <input type='submit' className='button-primary u-full-width' />
    </form>
  )
}

Form.propTypes = {}

export default Form
