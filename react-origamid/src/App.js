import React from "react";
import Produto from "./Produto";

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {

  const [arrayProducts, setArrayProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  return (
    <Produto loading={loading} setLoading={setLoading} arrayProducts={arrayProducts} setArrayProducts={setArrayProducts} />
  )
}

export default App;
