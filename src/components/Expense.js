import React from 'react'
import PropTypes from 'prop-types'

const Expense = ({ expense }) => {
  return (
    <li className='gastos'>
      <p>{expense.expenseAmount}</p>
    </li>
  )
}

Expense.propTypes = {
  expense: PropTypes.object.isRequired
}

export default Expense
