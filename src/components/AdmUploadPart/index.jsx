import React from 'react'
import { useAlert } from "react-alert"
import {BiCloudUpload}  from 'react-icons/bi'
import './style.css'

export default function AdmUploadPart(props) {
  const alert = useAlert()
  const { name, type, handleInput, handleDelete, existentData, data } = props
  return (
    <>
      <div className="upload-part">
        <div className="tittle-btn">
          <p>{name}</p>
          <label htmlFor={type}><BiCloudUpload color="black" size={20}/></label>
        </div>

        <div className="existent-file-list">
          {existentData[type].map(file => {
            return (
              <div className="existent-file" key={file._id} >
                <p>{file.name}</p>
                <div className="file-buttons">
                  <a href={file.url} target="_blank" rel="noreferrer">
                    <button type="button">Abrir</button>
                  </a>
                  <button
                    id={file.id}
                    type="button"
                    onClick={() => {
                      alert.show(`Tem certeza que deseja excluir ${file.name}?`, {
                        title: "Excluir Arquivo",
                        closeCopy: "Cancelar",
                        actions: [
                          {
                            copy: "Sim",
                            onClick: () => handleDelete(file._id)
                          }
                        ]
                      })
                    }}
                  >Excluir
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="file-list">
          {data[type].map(file => {
            return (
              <p key={file.name}>{file.name}</p>
            )
          })}
        </div>
      </div>
      <input multiple onChange={e => handleInput(e, type)} type="file" id={type} />
    </>
  )
}
