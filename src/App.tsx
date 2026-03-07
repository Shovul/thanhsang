import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Contacts from "./components/Contacts"
import Projects from "./components/Projects"
import Skills from "./components/Skills"



function App() {

  return (
    <>
      <Navbar />
      <div className="px-10 md:px-20 lg:px-50 pb-10 bg-base-200">
        <Hero />

        <h2 className="text-3xl font-bold text-center mb-12 divider">Projects</h2>
        <div className="flex flex-col lg:flex-row">
          <p className="flex-1 text-xl">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>

          <Projects />
        </div>

        <Skills />
      </div>
      

      <Contacts />
    </>
  )
}

export default App
