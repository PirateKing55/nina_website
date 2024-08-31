import { Navbar, Home, About, Projects, Contact, Blogs, Media } from './components'

function App() {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Blogs />
      <Media />
      <Contact />
    </div>
  )
}

export default App