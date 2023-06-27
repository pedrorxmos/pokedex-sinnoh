import './scss/global.scss';
import { Pokedex } from './views';
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <h1>Pokedex</h1>
      <Routes>
        <Route path='/' element={<Pokedex />}/>
        <Route path='favorites' element={<Pokedex />} />
      </Routes>
    </>
  )
}

export default App
