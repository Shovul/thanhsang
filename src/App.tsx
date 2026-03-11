import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contacts from "./components/Contacts"
import Projects from "./components/Projects"
import Skills from "./components/Skills"



function App() {

  return (
    <>
      <Navbar />
      <div className="px-10 md:px-20 lg:px-40 pb-10 bg-base-200 transition duration-300">
        <Hero />

        <Projects />

        <Skills />
      </div>
      
      <Contacts />
    </>
  )
}

export default App

