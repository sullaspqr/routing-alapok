import { Routes, Route, NavLink } from 'react-router-dom'
import { Komment } from './pages/Komment'
import { Poszt } from './pages/Poszt'
import { Egykomment } from './pages/Egykomment'

import './App.css'

export const App = () => {

  return (
    <>
     <h1>React Router példa</h1>
      <nav className="d-flex gap-4 p-3 fs-3">
        <NavLink to="/" className="nav-link">
        <i className="bi bi-house-door-fill me-2"></i>
        Komment</NavLink>
        <NavLink to="/post" className="nav-link">
        <i className="bi bi-info-circle-fill me-2"></i>
        Poszt</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Komment />} />
        <Route path="/post" element={<Poszt />} />
        <Route path="/comment/:commentId" element={<Egykomment />} />
      </Routes>
    </>
  )
}

export default App
