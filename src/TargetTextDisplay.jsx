import React from 'react'
import PropTypes from 'prop-types'

const TargetTextDisplay = props => {
  let sections = []
  let lastSection = ''
  let match = true

  for (let i = 0; i < props.compareTo.length; i++) {
    console.log(props.compareTo[i], props.display[i])

    if (match !== (props.compareTo[i] === props.display[i])) {
      sections.push({ text: lastSection, match })
      lastSection = ''
      match = props.compareTo[i] === props.display[i]
    }

    lastSection += props.compareTo[i]
  }

  sections.push({ text: lastSection, match })

  console.log(sections)

  return (
    <div>
      <p>{props.display}</p>
      <p>
        {sections.map((section, idx) =>
          <span key={idx} className={section.match ? '' : 'mismatch'} >{section.text}</span>
        )}
      </p>

    </div>

  )
}

TargetTextDisplay.propTypes = {
  display: PropTypes.string,
  compareTo: PropTypes.string
}

export default TargetTextDisplay