import {Route, Routes} from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import './App.css'

function App() {


  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/cart' element={ <Cart />} />
    </Routes>
    
    </>
  )
}

export default App
