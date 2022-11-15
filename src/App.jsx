import { HashRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import Home from './components/Home'
import Team from './components/Team'
import './styles.css'

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
