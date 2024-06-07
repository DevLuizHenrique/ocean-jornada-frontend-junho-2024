export default function Card() {
    return (
    <div className="card">
    <h2>Rick Sanchez</h2>
    <div className="tags">
      <div>Status: Vivo</div>
      <div>Espécie: Humana</div>
      <div>Origem: Terra C-137</div>
    </div>
    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez" className="character-image" />
    <div className="additional-info">Informação adicional</div>
  </div>
  )
}