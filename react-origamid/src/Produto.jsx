import React from 'react'

export default function Produto({ dados }) {
  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  )
}
