import React from "react";
import Radio from "./Form/Radio";

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];


function App() {

const [count, setCount] = React.useState(0)
const [respostas, setRespostas] = React.useState({
  p1: '',
  p2: '',
  p3: '',
  p4: '',
})
const [resultado, setResultado] = React.useState ('')

const resultadoFinal = () => {
  const corretas = perguntas.filter(({id, resposta}) => respostas[id] === resposta)
  setResultado(`Você acertou: ${corretas.length}`)
}

const handleClick = () => {
    if(count <=  2)
      setCount(count + 1)
    else {
      resultadoFinal();  
      setCount(1)
    }
  }

  const handleChange = ({target}) => {
    setRespostas({
      ...respostas,
      [target.id]: target.value 
    })
  }

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      {perguntas.map((pergunta, index) => (
          <Radio
          key={index}
          onChange={ handleChange }
          value={respostas[pergunta.id]}
          active={count === index}
          {...pergunta}
          />
      ))}
        {resultado ? <p>{ resultado }</p> : <button onClick={ handleClick }>Próximo</button>}
    </form>
  );
}

export default App;
