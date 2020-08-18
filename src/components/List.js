import React from 'react'
import PropTypes from 'prop-types'
import Expense from './Expense'

function List({ expenses }) {
  return (
    <div className='gastos-realizados'>
      <h2>Listado :</h2>
      {expenses.map(expense => (
        <Expense expense={expense} />
      ))}
    </div>
  )
}

List.propTypes = {
  expenses: PropTypes.array.isRequired
}

export default List
