import { Routes, Route, NavLink} from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'

import './App.css'

export const App = () => {

  return (
    <>
     <h1>React Router példa</h1>
      <nav>
        <NavLink to="/">Főoldal</NavLink>
        <NavLink to="/about">Rólunk</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
