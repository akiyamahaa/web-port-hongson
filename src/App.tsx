import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Extracurricular from './components/Extracurricular/Extracurricular'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Honor from './components/Honor'
import Resume from './components/Resume'

function App() {

  return (
    <div className='bg-background'>
      <Header />
      <Hero />
      <Honor />
      <About />
      <Resume />
      <Extracurricular />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
