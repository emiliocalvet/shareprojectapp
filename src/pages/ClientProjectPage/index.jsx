import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Slide, ToastContainer, toast } from 'react-toastify'
import api from '../../services/api'
import ClientAbout from '../../components/ClientAbout'
import ClientProjectView from '../../components/ClientProjectView'
import './style.css'

export default function ClientProjectPage() {
  const params = useParams()
  const { goBack } = useHistory();

  const [project, setProject] = useState({})
  const [data, setData] = useState({
    levant: [],
    estPrel: [],
    anteproj: [],
    exeObraCiv: [],
    exeMarc: [],
    relComp: [],
    orcamento: [],
    relObra: [],
    docs: []
  })

  // Carregar informações do projeto.
  useEffect(() => {
    function loadProject() {
      api.get(`/projects/${params.id}`).then(response => {
        setProject(response.data)
      }).catch(_ => {
        toast.error('Erro ao carregar o projeto')
      })
    }
    loadProject()
  }, [params.id])

  // Carrega arquivos no refresh.
  useEffect(() => {
    try {
      async function loadFiles() {
        const { data: files } = await api.get(`files/${params.id}`)

        if (files) {
          const savedData = {
            levant: files.filter(file => file.type === 'levant'),
            estPrel: files.filter(file => file.type === 'estPrel'),
            anteproj: files.filter(file => file.type === 'anteproj'),
            exeObraCiv: files.filter(file => file.type === 'exeObraCiv'),
            exeMarc: files.filter(file => file.type === 'exeMarc'),
            relComp: files.filter(file => file.type === 'relComp'),
            orcamento: files.filter(file => file.type === 'orcamento'),
            relObra: files.filter(file => file.type === 'relObra'),
            docs: files.filter(file => file.type === 'docs')
          }
          setData(savedData)
        }
      }
      loadFiles()
    } catch (error) {
      toast.error('Erro ao carregar os arquivos!')
    }
  }, [params.id])

  return (
    <div id="client-project-page">
      <ToastContainer
        closeButton={false}
        position="top-center"
        autoClose={3000}
        transition={Slide}
        hideProgressBar={true}
      />
      <div id="container">
        <ClientAbout project={project} />
        <div id="files-section">
          <ClientProjectView data={data} />
        </div>
        <button type="button" onClick={goBack} >Voltar</button>
      </div>
    </div>
  )
}
