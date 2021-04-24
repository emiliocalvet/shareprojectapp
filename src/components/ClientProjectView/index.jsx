import React from 'react'
import ClientViewPart from '../ClientViewPart'

export default function ClientProjectView(props) {
  const { data } = props

  return (
    <>
      <ClientViewPart
        name="1. Levantamento"
        type="levant"
        data={data}
      />

      <ClientViewPart
        name="2. Estudo preliminar"
        type="estPrel"
        data={data}
      />

      <ClientViewPart
        name="3. Anteprojeto"
        type="anteproj"
        data={data}
      />

      <ClientViewPart
        name="4. Projeto Executivo Obra Civil"
        type="exeObraCiv"
        data={data}
      />

      <ClientViewPart
        name="5. Projeto Executivo Marcenaria"
        type="exeMarc"
        data={data}
      />

      <ClientViewPart
        name="6. Relatório de Compras"
        type="relComp"
        data={data}
      />

      <ClientViewPart
        name="7. Orçamentos"
        type="orcamento"
        data={data}
      />

      <ClientViewPart
        name="8. Relatório de obra"
        type="relObra"
        data={data}
      />

      <ClientViewPart
        name="9. Documentos"
        type="docs"
        data={data}
      />
    </>
  )
}
