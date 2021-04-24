import React from 'react'
import './style.css'

export default function RadioInputBlock(props) {
  const { value, handleChange } = props

  return (
    <div className='radio-input-block'>
      <p>Tipo</p>
      <div className="box-label">
        <input
          id="res-in"
          name="type"
          value="Residencial"
          type="radio"
          onChange={event => handleChange(event.target.value)}
          checked={value === 'Residencial' ? 'checked' : false}
        />
        <label id="label-res" htmlFor="res-in">Residencial</label>
      </div>
      <div className="box-label">
        <input
          id="com-in"
          name="type"
          value="Comercial"
          type="radio"
          onChange={event => handleChange(event.target.value)}
          checked={value === 'Comercial' ? 'checked' : false}
        />
        <label id="label-com" htmlFor="com-in">Comercial</label>
      </div>
      <div className="box-label">
        <input
          id="corp-in"
          name="type"
          value="Corporativo"
          type="radio"
          onChange={event => handleChange(event.target.value)}
          checked={value === 'Corporativo' ? 'checked' : false}
        />
        <label id="label-com" htmlFor="corp-in">Corporativo</label>
      </div>
    </div>
  )
}
