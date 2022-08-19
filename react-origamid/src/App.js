import React from 'react';
import Produto from './Produto';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo.


const App = () => {

  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    const choicedProduct = JSON.parse(localStorage.getItem('produto'));
    if (choicedProduct !== 'null') setDados(choicedProduct);
}, [])

  React.useEffect(() => {
      if(dados !== null) {
        localStorage.setItem('produto', JSON.stringify(dados));
      }
  }, [dados])

  const handleClick = async ({ target }) => {
      const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${ target.innerText }`)
      const data = await response.json();
      setDados(data);
  }

  return (
    <div>
      <h1>Preferência: {dados && dados.id}</h1>
      <button onClick={ handleClick } value="notebook" style={{ margin: '5px' }}>Notebook</button>
      <button onClick={ handleClick } value="smartphone">Smartphone</button>

    {dados && <Produto dados={dados} />}
    </div>
  )
};

export default App;
