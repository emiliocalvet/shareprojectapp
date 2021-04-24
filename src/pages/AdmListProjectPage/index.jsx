import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import { useAlert } from "react-alert"
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import api from '../../services/api'
import './style.css'

export default function AdmListProjectPage() {
  const history = useHistory()
  const { goBack } = useHistory()
  const alert = useAlert()
  const [projetos, setProjetos] = useState([])

  // Carrega lista de projetos
  useEffect(() => {
    function loadProjects() {
      api.get('projects').then(response => {
        setProjetos(response.data)
        if (response.data.length < 1) {
          toast.warn('Não há projetos cadastrados!', {
            autoClose: 2500,
            onClose: () => history.push(`/adm`)
          })
        }
      }).catch(_ => {
        toast.error('Serviço indisponível no momento!', {
          hideProgressBar: true,
          onClose: () => history.push(`/adm`)
        })
      })
    }
    loadProjects()
  }, [history])

  // Exclui projeto
  function handleDelete(projeto) {
    api.delete(`projects/${projeto._id}`).then(_ => {
      api.get('projects').then(response => {
        toast.success(`Projeto excluido com sucesso!`, {
          hideProgressBar: true,
          onOpen: () => setProjetos(response.data)
        })
      }).catch(_ => {
        toast.error('Falha ao atualizar lista!', {
          hideProgressBar: true
        })
      })
    }).catch(_ => {
      toast.error('Serviço indisponível no momento!', {
        hideProgressBar: true
      })
    })
  }

  return (
    <div id="list-project-page">
      <ToastContainer transition={Slide} autoClose={3000} closeButton={false} position="top-center" />
      <div id="scroll-area">
        <div id="grouped-buttons">
          {projetos.map(projeto => {
            return (
              <div key={projeto._id} className="btn">
                <Link className="linkto" to={`/adm/project/${projeto._id}`} >
                  <button>{projeto.name1}</button>
                </Link>
                <button className="delete-button">
                  <FaTrashAlt
                    size={20}
                    color="red"
                    alt="Excluir Projeto"
                    onClick={() => {
                      alert.show(`Tem certeza que deseja excluir ${projeto.name1}?`, {
                        title: "Excluir Projeto",
                        closeCopy: "Cancelar",
                        actions: [
                          {
                            copy: "Sim",
                            onClick: () => handleDelete(projeto)
                          }
                        ]
                      })
                    }} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
      <button id="goBack" onClick={goBack}>Voltar</button>
    </div>
  );
}
