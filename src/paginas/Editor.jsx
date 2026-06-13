import "../estilos/editor.css";
import { useContext } from "react";
import { CVContext } from "../contexto/CVContext";

function Editor() {
  const { datosCV, setDatosCV } = useContext(CVContext);

const limpiarCV = () => {
  const datosVacios = {
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

    reactNivel: 0,
    javascriptNivel: 0,
    nodeNivel: 0,
    mysqlNivel: 0,
    mongodbNivel: 0,
  };

  setDatosCV(datosVacios);

  localStorage.removeItem("datosCV");
};

  return (
    <div className="editor-container">

      <h1>Editor de Currículum</h1>

      <p className="editor-subtitle">
        Completa tu información profesional para generar tu currículum.
      </p>

      <form className="editor-form">

        {/* Nombre */}

        <div className="form-group">
          <label>Nombre Completo</label>

          <input
            type="text"
            value={datosCV.nombre}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                nombre: e.target.value,
              })
            }
            placeholder="Ej. Alejandro Contreras"
          />
        </div>

        {/* Fotografía */}

        <div className="form-group">
          <label>Fotografía</label>

          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const archivo = e.target.files[0];

              if (archivo) {
                const lector = new FileReader();

                lector.onloadend = () => {
                  setDatosCV({
                    ...datosCV,
                    foto: lector.result,
                  });
                };

                lector.readAsDataURL(archivo);
              }
            }}
          />
        </div>

        {/* Profesión */}

        <div className="form-group">
          <label>Profesión</label>

          <input
            type="text"
            value={datosCV.profesion}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                profesion: e.target.value,
              })
            }
            placeholder="Ej. Ingeniero en Sistemas Computacionales"
          />
        </div>

        {/* Correo */}

        <div className="form-group">
          <label>Correo Electrónico</label>

          <input
            type="email"
            value={datosCV.correo}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                correo: e.target.value,
              })
            }
            placeholder="correo@email.com"
          />
        </div>

        {/* Teléfono */}

        <div className="form-group">
          <label>Teléfono</label>

          <input
            type="text"
            value={datosCV.telefono}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                telefono: e.target.value,
              })
            }
            placeholder="+52 312 123 4567"
          />
        </div>

        {/* Perfil */}

        <div className="form-group">
          <label>Perfil Profesional</label>

          <textarea
            rows="5"
            value={datosCV.perfil}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                perfil: e.target.value,
              })
            }
            placeholder="Describe tu perfil profesional..."
          />
        </div>

        {/* Habilidades */}

        <div className="form-group">
          <label>Habilidades</label>

          <textarea
            rows="3"
            value={datosCV.habilidades}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                habilidades: e.target.value,
              })
            }
            placeholder="React, JavaScript, CSS"
          />
        </div>

        {/* Idiomas */}

        <div className="form-group">
          <label>Idiomas</label>

          <textarea
            rows="2"
            value={datosCV.idiomas}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                idiomas: e.target.value,
              })
            }
            placeholder="Español, Inglés"
          />
        </div>

        {/* Educación */}

        <div className="form-group">
          <label>Educación</label>

          <textarea
            rows="3"
            value={datosCV.educacion}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                educacion: e.target.value,
              })
            }
            placeholder="Universidad Autónoma de Aguascalientes"
          />
        </div>

        {/* Certificaciones */}

        <div className="form-group">
          <label>Certificaciones</label>

          <textarea
            rows="3"
            value={datosCV.certificaciones}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                certificaciones: e.target.value,
              })
            }
            placeholder="React Fundamentals"
          />
        </div>

        {/* Proyectos */}

        <div className="form-group">
          <label>Proyectos</label>

          <textarea
            rows="3"
            value={datosCV.proyectos}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                proyectos: e.target.value,
              })
            }
            placeholder="Sistema de Gestión Escolar"
          />
        </div>

        {/* Experiencia */}

        <div className="form-group">
          <label>Experiencia Laboral</label>

          <textarea
            rows="4"
            value={datosCV.experiencia}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                experiencia: e.target.value,
              })
            }
            placeholder="Describe tu experiencia laboral..."
          />
        </div>

        {/* NIVELES DE LA GRÁFICA */}

        <h2 style={{ marginTop: "30px", textAlign: "center" }}>
          Nivel Técnico
        </h2>

        <div className="form-group">
          <label>React (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={datosCV.reactNivel}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                reactNivel: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="form-group">
          <label>JavaScript (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={datosCV.javascriptNivel}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                javascriptNivel: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="form-group">
          <label>Node.js (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={datosCV.nodeNivel}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                nodeNivel: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="form-group">
          <label>MySQL (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={datosCV.mysqlNivel}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                mysqlNivel: Number(e.target.value),
              })
            }
          />
        </div>

        <div className="form-group">
          <label>MongoDB (%)</label>
          <input
            type="number"
            min="0"
            max="100"
            value={datosCV.mongodbNivel}
            onChange={(e) =>
              setDatosCV({
                ...datosCV,
                mongodbNivel: Number(e.target.value),
              })
            }
          />
        </div>

        <button type="button">
          Guardar Información
        </button>

        <button type="button"
          onClick={limpiarCV}
        >Limpiar CV
        </button>

      

      </form>

    </div>
  );
}

export default Editor;