
import '../src/styles/StyleSettings.css'
import CardContainer from './components/CardContainer'

function App() {

  return (
    <>
      <header>
        <h1>Poké-Memory</h1>
        <h2>Gotta remember 'em all!</h2>
      </header>
      <main>
        <CardContainer />
      </main>
      <footer>
        <p>Source code available at <a href="https://github.com/Silmunia/odin-memory" target="_blank" rel="noopener noreferrer external">Github</a></p>
        <p className="disclaimer"><a href="https://www.portal-pokemon.com/" target="_blank" rel="noopener noreferrer external">Pokémon™</a> is a registered trademark of <a href="https://www.nintendo.com" target="_blank" rel="noopener noreferrer external">Nintendo™</a></p>
      </footer>
    </>
  )
}

export default App
