import './scss/global.scss';
import { Favorites, Home, Pokemon } from './views';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Pokedex</h1>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='pokemon/:id' element={<Pokemon />} />
        <Route path='favorites' element={<Favorites />} />
      </Routes>
    </>
  )
}

export default App
