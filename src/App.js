import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Layouts/Navbar'
import Footer from './Components/Layouts/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound'
import { GithubProvider } from './Context/Github/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <Navbar />
          <main className='text-primary-content container mx-auto pb-12 px-3'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/notfound' element={<NotFound />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
