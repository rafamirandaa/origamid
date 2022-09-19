import React from "react";

// Otimize o código do slide anterior
// Utilizando a array abaixo para mostrar
// cada checkbox na tela.

function App() {

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const [cores, setCores] = React.useState([])


function handleClick({ target }) {
  if(target.value !== cores.find((cor) => cor)){
    setCores([...cores, target.value])
  } else {
    setCores(cores.filter((cor) => cor !== target.value))
  }
}

  return (
    <form>
      {coresArray.map((cor) => 
        <label key={cor}>
          <input type="checkbox" value={cor} id="" checked={cores.includes(cor)} onChange={handleClick} />
          {cor[0].toUpperCase() + cor.substring(1)}
        </label>
       )}
    </form>
  );
}

export default App;
