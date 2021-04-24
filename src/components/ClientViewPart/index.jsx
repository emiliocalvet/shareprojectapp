import React from 'react'
import './style.css'

export default function ClientViewPart(props) {
  const { name, type, data } = props

  return (
    <>
      <div className="client-view-part">
        <p>{name}</p>
        <div className="file-list">
          {data[type].map(file => {
            return (
              <div className="file" key={file._id} >
                <a href={file.url} target="_blank" rel="noreferrer">
                  {file.name}
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
