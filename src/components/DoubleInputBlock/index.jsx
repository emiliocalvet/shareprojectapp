import React from 'react'
import './style.css'

export default function DoubleInputBlock(props) {
  const {
    name,
    value1 = undefined,
    value2 = undefined,
    format = 'text',
    handleChange1,
    handleChange2
  } = props

  return (
    <div className="double-input-block">
      <p>{`${name}`}</p>
      <input
        value={value1}
        type={format}
        autoComplete="new-password"
        onWheel={e => e.target.blur()}
        onChange={e => handleChange1(e.target.value)}
      />
      <input
        value={value2}
        type={format}
        autoComplete="new-password"
        onWheel={e => e.target.blur()}
        onChange={e => handleChange2(e.target.value)}
      />
    </div>
  )
}
