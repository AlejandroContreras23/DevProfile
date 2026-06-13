import {createContext, useState, useEffect} from "react";

export const CVContext = createContext();

export function CVProvider({ children }) {

  const [datosCV, setDatosCV] = useState(() => {

    const datosGuardados =
      localStorage.getItem("datosCV");

    return datosGuardados
      ? JSON.parse(datosGuardados)
      : {
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
          experiencia: "",
          foto: "",

          reactNivel: 90,
          javascriptNivel: 85,
          nodeNivel: 80,
          mysqlNivel: 75,
          mongodbNivel: 70,
        };

  });

  useEffect(() => {

    localStorage.setItem(
      "datosCV",
      
      JSON.stringify(datosCV)
    );

  }, [datosCV]);

  return (
    <CVContext.Provider
      value={{
        datosCV,
        setDatosCV,
      }}
    >
      {children}
    </CVContext.Provider>
  );
}