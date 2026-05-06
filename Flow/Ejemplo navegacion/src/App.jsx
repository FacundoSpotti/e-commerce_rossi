import { BrowserRouter, Routes, Route, Navigate } from "react-router";

import "./App.css"

//Imports de los componentes
import Layout from "./components/Layout"
import Login from "./components/Login"
import Registro from "./components/Registro"
import Home from "./components/Home"
import Carrito from "./components/Carrito"
import Perfil from "./components/Perfil"
import NoEncontrado from "./components/NoEncontrado"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/" element={<Layout />}>
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registro />} />
            <Route path="home" element={<Home />} />
            <Route path="carrito" element={<Carrito />} />
            <Route path="perfil" element={<Perfil />} />
          </Route>

          <Route
            path="*"
            element={<NoEncontrado />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
