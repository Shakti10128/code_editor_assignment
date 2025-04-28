import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Problems from './pages/Problems'
import ProblemDetails from './pages/problemDetails'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Problems/>}/>
          <Route path='/problems/:problemId' element={<ProblemDetails/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
