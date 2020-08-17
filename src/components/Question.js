import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'

function Question(props) {
  // state
  const [budget, setBudget] = useState(0)
  const [error, setError] = useState(false)

  // handle onChange Event.
  const handleOnChange = e => setBudget(parseInt(e.target.value, 10))

  // handle onSubmit Event.
  const handleOnSubmit = e => {
    e.preventDefault()
    // Validate
    if (budget < 1 || isNaN(budget)) {
      setError(true)
      return
    }
  }

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error && <p className='alerta-error'>Error</p>}
      <form onSubmit={handleOnSubmit}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={handleOnChange}
        />
        <input type='submit' className='button-primary u-full-width' />
      </form>
    </Fragment>
  )
}

Question.propTypes = {}

export default Question
