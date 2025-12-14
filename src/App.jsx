import React from "react";
import Navbar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";


const App = () => {
  return (
    <div className="min-h-screen bg-whitte">{/*Set Background color */}
    <Navbar />
    <main>
      <Hero />
    </main>
    </div>
  )
}
export default App