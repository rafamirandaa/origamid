import React from "react";

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Essa é a função utilizado para realizar o POST

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

function App() {

  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [response, setResponse] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((data) => setResponse(data));
  }

  const handleChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="nome">Nome:
        <input onChange={ handleChange } type="text" name="nome" id="nome" />
      </label>

      <label htmlFor="email">Email:
        <input onChange={ handleChange } type="email" name="email" id="email" />
      </label>

      <label htmlFor="password">Senha:
        <input onChange={ handleChange } type="password" name="senha" id="password" />
      </label>

      <label htmlFor="cep">Cep:
        <input onChange={ handleChange } type="text" name="cep" id="cep" />
      </label>

      <label htmlFor="rua">Rua:
        <input onChange={ handleChange } type="text" name="rua" id="rua" />
      </label>

      <label htmlFor="numero">Numero:
        <input onChange={ handleChange } type="text" name="numero" id="numero" />
      </label>

      <label htmlFor="bairro">Bairro:
        <input onChange={ handleChange } type="text" name="bairro" id="bairro" />
      </label>

      <label htmlFor="cidade">Cidade:
        <input onChange={ handleChange } type="text" name="cidade" id="cidade" />
      </label>

      <label htmlFor="estado">Estado:
        <input onChange={ handleChange } type="text" name="estado" id="estado" />
      </label>


      <button>
        Enviar
      </button>

      {response.status === 200}
      <p>Enviado com sucesso!</p>
    </form>
  );
}

export default App;
