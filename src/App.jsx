
import './App.css'

function App() {
  return (
    <>
      <div className="card">
        <h2 className="character-name">Rick Sanchez</h2>
        <div className="character-info">
          <span className="info-badge">Status: Vivo</span>
          <span className="info-badge">Espécie: Humana</span>
          <span className="info-badge">Origem: Terra C-137</span>
        </div>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" className="character-image" />
        <div className="additional-info">Informação adicional</div>
      </div>
    </>
  )
}

export default App
