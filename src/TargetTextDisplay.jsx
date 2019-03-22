import React from 'react'
import PropTypes from 'prop-types'

const TargetTextDisplay = props => {
  return (
    <p>
      {props.display}
    </p>
  )
}

TargetTextDisplay.propTypes = {
  display: PropTypes.string,
  compareTo: PropTypes.string
}

export default TargetTextDisplay