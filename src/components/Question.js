import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import Error from './Error'

function Question({ setBudget, setRest }) {
  // state
  const [money, setMoney] = useState(0)
  const [error, setError] = useState(false)

  // handle onChange Event.
  const handleOnChange = e => setMoney(parseInt(e.target.value, 10))

  // handle onSubmit Event.
  const handleOnSubmit = e => {
    e.preventDefault()
    // Validate
    if (money < 1 || isNaN(money)) {
      setError(true)
      return
    }
    setBudget(money)
    setRest(money)
  }

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>

      {error && <Error message='El presupuesto es incorrecto.' />}

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

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRest: PropTypes.func.isRequired
}

export default Question
