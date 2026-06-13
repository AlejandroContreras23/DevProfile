import "../estilos/layoutcv.css";
import { useContext } from "react";
import { CVContext } from "../contexto/CVContext";
import GraficaHabilidades from "./GraficaHabilidades";

function LayoutCV() {
  const { datosCV } = useContext(CVContext);

  return (
    <div className="cv-container">

      <div className="cv-sidebar">

        <div className="cv-photo">

       {datosCV.foto ? (
       <img
        src={datosCV.foto}
        alt="Foto de perfil"
        className="cv-photo-img"
       />
       ) : ("FOTO")
      }

</div>

        <div className="cv-section">
          <h3>Contacto</h3>

          <p>{datosCV.correo || "correo@email.com"}</p>

          <p>{datosCV.telefono || "+52 312 123 4567"}</p>
        </div>

        <div className="cv-section">
          <h3>Habilidades</h3>

          <p>
            {datosCV.habilidades || "React, JavaScript, CSS"}
          </p>
        </div>

        <div className="cv-section">
          <h3>Idiomas</h3>

          <p>
            {datosCV.idiomas || "Español, Inglés"}
          </p>
        </div>

        <div className="cv-section">
           <h3>Nivel Técnico</h3>
           <GraficaHabilidades />
        </div>

      </div>

      <div className="cv-main">

        <div className="cv-header">

          <h1>
            {datosCV.nombre || "NOMBRE COMPLETO"}
          </h1>

          <h2>
            {datosCV.profesion || "Desarrollador Web Full Stack"}
          </h2>

        </div>

        {/* PERFIL */}

        <div className="cv-section-main">

          <h3>Perfil Profesional</h3>

          <p>
            {datosCV.perfil ||
              "Profesional enfocado en desarrollo web moderno con experiencia en aplicaciones React."}
          </p>

        </div>

        {/* EXPERIENCIA */}

        <div className="cv-section-main">

          <h3>Experiencia Laboral</h3>

          <p>
            {datosCV.experiencia ||
              "Auxiliar Administrativo en empresa de servicios."}
          </p>

        </div>

        {/* PROYECTOS */}

        <div className="cv-section-main">

          <h3>Proyectos</h3>

          <p>
            {datosCV.proyectos ||
              "Sistema de Gestión Escolar"}
          </p>

        </div>

        {/* EDUCACION */}

        <div className="cv-section-main">

          <h3>Educación</h3>

          <p>
            {datosCV.educacion ||
              "Universidad Autónoma de Aguascalientes"}
          </p>

        </div>

        {/* CERTIFICACIONES */}

        <div className="cv-section-main">

          <h3>Certificaciones</h3>

          <p>
            {datosCV.certificaciones ||
              "React Fundamentals"}
          </p>

        </div>

      </div>

    </div>
  );
}

export default LayoutCV;