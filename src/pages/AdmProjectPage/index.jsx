import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import ReactLoading from 'react-loading'
import { Slide, ToastContainer, toast } from 'react-toastify'
import About from '../../components/AdmAbout'
import AdmProjectForm from '../../components/AdmProjectForm'
import AdmEditProjectPage from '../AdmEditProjectPage'
import api from '../../services/api'
import postFile from '../../util/postFile'
import 'react-toastify/dist/ReactToastify.css'
import "./style.css"

export default function AdmProjectPage() {

  const { goBack } = useHistory();
  const params = useParams()

  // Estado utilizado para atualizar tela após upload de arquivos.
  const [update, setUpdate] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editVerif, setEditVerif] = useState(false)

  // Guarda infrmações do projeto acessado.
  const [project, setProject] = useState({})

  // Guarda os arquivos que serão enviados e armazenados.
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

  // Guarda os arquivos existentes no armazenamento.
  const [existentData, setExistentData] = useState({
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

  // Carrega projeto no refresh.
  useEffect(() => {
    function loadProject() {
      api.get(`projects/${params.id}`).then(response => {
        setProject(response.data)
      }).catch(_ => {
        toast.error('Falha ao carregar página!', {
          onClose: goBack
        })
      })
    }
    loadProject()
  }, [params.id, editVerif, goBack])

  // Carrega arquivos no refresh e após submits.
  useEffect(() => {
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
        setExistentData(savedData)
      }
    }
    loadFiles()
  }, [params.id, update])

  // Tela que aparece enquanto projeto é carregado.
  if (!project) {
    return <p>Carregando...</p>
    // Fazer Tela de Loading!!!!!!!!
  }

  // Limpar estado dos arquivos pre-upload.
  function cleanUploadFileList() {
    setData({
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
  }

  // Mostrar tela de edição.
  function showEdit(_) {
    setEditVerif(true)
  }

  // Sair da tela de edição.
  function leftEdit(_) {
    setEditVerif(false)
  }

  // Lidar com edição das informações do projeto
  function handleEdit(info) {
    api.put(`projects/${params.id}`, info).then(_ => {
      setEditVerif(false)
      setTimeout(() => {
        toast.success('Edição concluida!', {
        })
      }, 200)
    }).catch(_ => {
      setEditVerif(false)
      setTimeout(() => {
        toast.error('Erro ao editar o projeto!', {
        })
      }, 200)
    })
  }

  // Tela de Edição
  if (editVerif) {
    return <AdmEditProjectPage
      project={project}
      handleEdit={handleEdit}
      leftEdit={leftEdit}
      currentKey={project.key}
    />
  }

  // Lidar com input de arquivos de cada tipo.
  function handleInput(event, type) {
    try {
      if (!event.target.files) {
        return
      }

      const selectedFiles = Array.from(event.target.files)

      switch (type) {
        case 'levant':
          setData({ ...data, levant: selectedFiles })
          break
        case 'estPrel':
          setData({ ...data, estPrel: selectedFiles })
          break
        case 'anteproj':
          setData({ ...data, anteproj: selectedFiles })
          break
        case 'exeObraCiv':
          setData({ ...data, exeObraCiv: selectedFiles })
          break
        case 'exeMarc':
          setData({ ...data, exeMarc: selectedFiles })
          break
        case 'relComp':
          setData({ ...data, relComp: selectedFiles })
          break
        case 'orcamento':
          setData({ ...data, orcamento: selectedFiles })
          break
        case 'relObra':
          setData({ ...data, relObra: selectedFiles })
          break
        case 'docs':
          setData({ ...data, docs: selectedFiles })
          break
        default:
          break
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Lidar com delete de arquivos no armazenamento.
  function handleDelete(id) {
    api.delete(`/files/${id}`).then(_ => {
      toast.success('Arquivo excluido!', {
        onOpen: () => setUpdate(update ? false : true),
      })
    }).catch(_ => {
      toast.error('Falha ao excluir arquivo!', {
      })
    })
  }

  // Lidar com a submissão do formulário de arquivos.
  function handleSubmit(event) {
    event.preventDefault()

    const fileType = [
      'levant',
      'estPrel',
      'anteproj',
      'exeObraCiv',
      'exeMarc',
      'relComp',
      'orcamento',
      'relObra',
      'docs',
    ]

    try {
      //Cadastro arquivos da lista de data.
      fileType.forEach(type => {
        postFile(data, params.id, type)
      })
      setLoading(true)
      setTimeout(() => {
        cleanUploadFileList()
        toast.success('Atualização concluida!', {
          onOpen: () => setUpdate(update ? false : true)
        })
        setLoading(false)
      }, 3000)
    } catch (error) {
      toast.error('Falha no cadastro!');
    }
  }

  // Tela Principal.
  return (
    <div id="project-page">
      <ToastContainer
        closeButton={false}
        position="top-center"
        autoClose={3000}
        transition={Slide}
        hideProgressBar={true}
      />
      <div id="container">
        <About project={project} showEdit={showEdit} />
        <form onSubmit={handleSubmit} id="upload-section">
          <AdmProjectForm
            handleInput={handleInput}
            handleDelete={handleDelete}
            existentData={existentData}
            data={data}
          />
          <div id="create-buttons">
            <button type='button' onClick={goBack}>Voltar</button>
            <button type="submit">
              {loading ?
                <ReactLoading className="loading" type="spin" color="black" height={35} width={35} /> :
                'Atualizar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
