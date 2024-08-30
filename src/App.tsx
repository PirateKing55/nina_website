import { Navbar, Home, About, Projects, Contact } from './components'

function App() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App