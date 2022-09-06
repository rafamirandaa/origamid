import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produto = () => {

  const global = React.useContext(GlobalContext);

  if(global.fetchApi !== null) {
  return (
    <div>
      <ul>
        {global.fetchApi.map((product) => <li key={product.id}>{product.nome}</li>)}
      </ul>

      <button onClick={ global.limparDados }>Limpar Dados</button>
    </div>
    )
  }
}

export default Produto
