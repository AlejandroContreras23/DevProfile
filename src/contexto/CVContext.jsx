import { createContext, useState } from "react";

export const CVContext = createContext();

export function CVProvider({ children }) {
  const [datosCV, setDatosCV] = useState({
  nombre: "",
  profesion: "",
  correo: "",
  telefono: "",
  perfil: "",
  habilidades: "",
  idiomas: "",
  educacion: "",
  certificaciones: "",
  proyectos: "",
});

  return (
    <CVContext.Provider value={{ datosCV, setDatosCV }}>
      {children}
    </CVContext.Provider>
  );
}