import {Route, Routes} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { Tops } from './pages/Tops'
import { Cancel } from './pages/Cancel'
import { Success } from './pages/Success'
import './App.css'

function App() {


  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/cart' element={ <Cart />} />
      <Route path='/tops'element={<Tops />} />
      <Route path='/success'element={<Success />} />
      <Route path='/cancel'element={<Cancel />} />
    </Routes>
    
    </>
  )
}

export default App
