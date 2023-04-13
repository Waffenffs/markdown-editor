import './App.css'
import Home from './routes/Home'
import Auth from './routes/Auth'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
      <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/auth' element={ <Auth /> } />
      </Routes>
  )
}

export default App
