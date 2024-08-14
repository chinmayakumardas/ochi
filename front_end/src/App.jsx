import About from "./components/About"
import LandingPage from "./components/LandingPage"
import Marqee from "./components/Marqee"
import Navbar from "./components/Navbar"

function App() {


  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
        <Navbar/>
        <LandingPage/>
        <Marqee/>
        <About/>
    </div>
  )
}

export default App
