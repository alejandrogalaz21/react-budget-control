import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Control = ({ budget, rest }) => {
  return (
    <Fragment>
      <div className='alert alert-primary'>Presupuesto: $ {budget}</div>
      <div className='alert'>Restante: $ {rest}</div>
    </Fragment>
  )
}

Control.propTypes = {
  budget: PropTypes.number.isRequired,
  rest: PropTypes.number.isRequired
}

export default Control
