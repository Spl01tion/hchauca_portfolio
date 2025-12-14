import React from "react";
import Navbar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";


const App = () => {
  return (
    <div className="min-h-screen bg-whitte pb-[100vh]">{/*Set Background color */}
    <Navbar />
    <main>
      <Hero />
      <About />
    </main>
    </div>
  )
}
export default App