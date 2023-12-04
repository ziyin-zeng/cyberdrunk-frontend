import './App.scss'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/index'
import Home from './components/Home/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/*  Route组件里的index是指*/}
          <Route index element={<Home />}/>
            <Route path="/about" element={<Home />}/>
            <Route path="/contact" element={<Home />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
