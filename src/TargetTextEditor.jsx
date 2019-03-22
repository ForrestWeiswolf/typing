import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TargetText = props => {
  let [text, setText] = useState('');
  let [isEditing, setIsEditing] = useState(true);

  return <div>
    {isEditing ? (
      <label>
        <p>Target text:</p>
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </label>
    ) : <p>{text}</p>}

    <button disabled={isEditing} onClick={() => setIsEditing(true)}>Edit</button>
    <button disabled={!isEditing} onClick={() => {
      setIsEditing(false)
      props.saveText(text)
    }}>Save</button>
  </div>

}

TargetText.propTypes = {
  saveText: PropTypes.func
}

export default TargetText