import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify'
import api from '../../services/api'
import logo from '../../images/logo.png'
import 'react-toastify/dist/ReactToastify.css'
import './style.css'

export default function ClientSearchProjectPage() {
  const history = useHistory()
  const { goBack } = useHistory()

  const [key, setKey] = useState('')

  function handleSearch(_) {
    if (key) {
      api.get(`projects/key/${key}`).then(response => {
        if (response.data) {
          history.push(`/client/project/${response.data._id}`)
        } else {
          toast.warn('Esta chave não está cadastrada!')
        }
      }).catch(_ => {
        toast.error('Serviço indisponível no momento!')
      })
    } else {
      toast.warn('Você deve inserir uma chave!')
    }
  }

  return (
    <div id="search-page">
      <ToastContainer position="top-center" autoClose={3000} transition={Slide} closeButton={false} />
      <img src={logo} alt="Logomarca Estudio Lar" />
      <div className="options-box">
        <div className="key-input">
          <label htmlFor="project-key">Chave de Acesso</label>
          <input id="project-key" type="text" value={key} autoCorrect="new-password" onChange={e => setKey(e.target.value)} />
        </div>
        <button className="btn" type="button" onClick={handleSearch}>
          Acessar Projeto
        </button>
        <button className="btn" type="button" onClick={goBack}>
          Voltar
        </button>
      </div>
    </div>
  )
}
