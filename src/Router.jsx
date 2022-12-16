import React from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import FicheLogement from "./pages/FicheLogement"
import Error from "./pages/Error"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
//import { useLocation } from "react-router-dom";

function Routing() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fiche_logement/:id" element={<FicheLogement />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Routing
