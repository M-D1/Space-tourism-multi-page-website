
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'



import './App.css'

function App() {
  

  return (
    <Router>
      
      <Routes>
        <Route path='/' element={<NavBar />} >
          <Route index  element={<Home />} />
          <Route path='destination' element={<Destination />} />
          <Route path='crew' element={<Crew />} />
          <Route path='technology' element={<Technology />} />
        </Route>
      
      </Routes>
    </Router>
  )
}

export default App
