import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import HomePage from './pages/Home'

function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>

      </Route>
    </Routes>
  )
}

export default App
