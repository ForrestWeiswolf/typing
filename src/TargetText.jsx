import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TargetText = props => {
  let [text, setText] = useState('');

  return (
    <label>
      <p>Target text:</p>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
      />
    </label>
  )
}

TargetText.propTypes = {
}

export default TargetText