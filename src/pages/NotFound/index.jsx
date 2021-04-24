import React from 'react'
import { useHistory } from 'react-router-dom'
import error404 from '../../images/notfound-404.jpg'
import './style.css'

export default function NotFound() {
  const history = useHistory()

  function handleClick(e) {
    e.preventDefault()
    history.push('/')
  }

  return (
    <div id="error">
      <p>Perdido no escuro?</p>
      <div>
        <img src={error404} alt="Página não encontrada" />
      </div>
      <p>
        <button type="button" onClick={e => handleClick(e)}>
          Ir para luz
        </button>
      </p>
    </div>
  )
}
