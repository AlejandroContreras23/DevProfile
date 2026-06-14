import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./paginas/Inicio.jsx";
import Editor from "./paginas/Editor.jsx";
import VistaPrevia from "./paginas/VistaPrevia.jsx";
import AcercaDe from "./paginas/AcercaDe.jsx";
import "./estilos/navbar.css";
import Navbar from "./componentes/Navbar";
import Dashboard from "./paginas/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/preview" element={<VistaPrevia />} />
        <Route path="/about" element={<AcercaDe />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;