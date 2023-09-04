import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return(
  <>
    <Nav/>
    <Header/>
    <main>
      <Outlet/>
    </main>
    <div>
      <Footer/>
    </div>
  </>
  )
}

export default App
