import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = props => {
  const [input, setInput] = useState({
    expense: '',
    exprenseAmount: 0
  })

  const { expense, expenseAmount } = input

  // handle on change input.
  const handleOnChange = e => {}

  // handle on submit form.
  const handleOnSubmit = e => {
    e.preventDefault()
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
        />
      </div>

      <input type='submit' className='button-primary u-full-width' />
    </form>
  )
}

Form.propTypes = {}

export default Form
