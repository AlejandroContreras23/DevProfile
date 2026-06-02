import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./paginas/Inicio.jsx";
import Editor from "./paginas/Editor.jsx";
import VistaPrevia from "./paginas/VistaPrevia.jsx";
import Panel from "./paginas/Panel.jsx";
import AcercaDe from "./paginas/AcercaDe.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/preview" element={<VistaPrevia />} />
        <Route path="/dashboard" element={<Panel />} />
        <Route path="/about" element={<AcercaDe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;