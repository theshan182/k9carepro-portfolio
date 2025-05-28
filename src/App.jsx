import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Research from "./components/Research"
import Features from "./components/Features"
import Implementation from "./components/Implementation"
import Gallery from "./components/Gallery"
import Contact from "./components/Contact"
import Technology from "./components/Technology"
import MilesStone from "./components/Milestone"

export default function App() {
  return (
    <div className="min-h-screen bg-beige-100 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Features />
      <Implementation />
      <Technology />
      <MilesStone />
      <Gallery />
      <Contact />
    </div>
  )
}
