import React from 'react'

function Produto({ loading, setLoading, arrayProducts , setArrayProducts }) {

  const searchTabletAPI = async () => {
    const fetchApi = await fetch('https://ranekapi.origamid.dev/json/api/produto/tablet');
    const products = await fetchApi.json();
    return products;
  }

  const searchSmartphoneAPI = async () => {
    const fetchApi = await fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone');
    const products = await fetchApi.json();
    return products;
  }

  const searchNotebookAPI = async () => {
    const fetchApi = await fetch('https://ranekapi.origamid.dev/json/api/produto/notebook');
    const products = await fetchApi.json();
    return products;
  }

  const handleClick = async (event) => {
    setLoading(!loading);
    if(event.target.value === 'tablet') {
      const response = await searchTabletAPI();
      setArrayProducts([response]);
      setLoading(false);
      } else if (event.target.value === 'smartphone') {
        const response = await searchSmartphoneAPI();
        setArrayProducts([response]);
        setLoading(false);
      } else {
        const response = await searchNotebookAPI();
        setArrayProducts([response]);
        setLoading(false);
      }
    }

  return (
    <div>
    <p>Tablet:</p>
    <button onClick={ handleClick } value={'tablet'}>Mostrar produto</button>
    
    <p>SmartPhone:</p>
    <button onClick={ handleClick } value={'smartphone'}>Mostrar produto</button>

    <p>Notebook:</p>
    <button onClick={ handleClick } value={'notebook'}>Mostrar produto</button>
    {
      loading ? 'Carregando...' :
    
    <div>
    {arrayProducts.map(({ nome, preco, fotos }) => (
        <div key={nome}>
          <h1>{nome}</h1>
          <p>{preco}</p>
          {fotos.map((foto) => (
            <img key={foto.titulo} src={foto.src} alt='product'></img>
          ))}
        </div>
      ))}
    </div>
    } 
  </div>
  )
}
export default Produto;