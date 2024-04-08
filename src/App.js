import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Start from './pages/Start'
import './App.css';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/tjenester' element={<Services />} />
            <Route path='/om' element={<About />} />
            <Route path='/kontakt' element={<Contact />} />
            <Route path='/start' element={<Start />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;