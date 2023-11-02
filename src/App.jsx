import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Sidemenu from './components/Sidemenu'
import Contact from './pages/Contact'
import PagenotFound from './pages/PagenotFound'
import Portfolio from './pages/Portfolio'
function App() {
  return (
    <Router>
      <Sidemenu/>
      <Routes>
        <Route path='/' exact  element={<Home/>}/>
        <Route path='/contact'   element={<Contact/>}/>
        <Route path='/portfolio'   element={<Portfolio/>}/>
        <Route path='*'   element={<PagenotFound/>}/>
      </Routes>
    </Router>
  )
}
export default App
