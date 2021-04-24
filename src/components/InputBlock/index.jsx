import React from 'react'
import './style.css'

export default function InputBlock(props) {
  const {name, value = undefined, format = 'text', handleChange} = props

  return (
    <div className="input-block">
      <p>{`${name}`}</p>
      <input
        value={value}
        type={format}
        autoComplete="new-password"
        onWheel={e => e.target.blur()}
        onChange={e => handleChange(e.target.value)}/>
    </div>
  )
}
