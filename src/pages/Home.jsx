import { useEffect, useState } from 'react'
import Card from '../components/Card/Card'

function Home() {
  const [itens, setItens] = useState([])

  async function carregarDados() {
    const apiUrl = 'https://rickandmortyapi.com/api/character'

    // Promise significa um processo executando ao mesmo tempo
    // Esse processo pode levar um tempo, então precisamos aguardá-lo
    // Aguardar significa colocar o `await` ao lado
    // Assim que processo terminar, a variável `response` receberá
    // a resposta do API

    // Fetch é o pacote que usamos para acessar o conteúdo de URLs
    // que estão em algum lugar da internet
    const response = await fetch(apiUrl)

    const body = await response.json()

    const results = body.results
    console.log('results', results)

    setItens(results)
  }

  useEffect(function () {
    carregarDados()
  }, [])

  return (
    <>
      <div className="cards">
        {/* Para cada um dos itens da lista, exibir um Card */}
        {itens.map(elemento => <Card item={elemento} key={elemento.name} />)}
      </div>
    </>
  )
}

export default Home