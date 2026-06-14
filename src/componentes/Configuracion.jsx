import { useEffect, useState } from "react";
import "../estilos/configuracion.css";

function Configuracion() {
  const [abierto, setAbierto] = useState(false);

  const [tema, setTema] = useState(localStorage.getItem("tema") || "claro");

  const [tamanoLetra, setTamanoLetra] = useState(
    localStorage.getItem("tamanoLetra") || "normal",
  );

  useEffect(() => {
    document.body.classList.remove("tema-claro", "tema-oscuro");

    document.body.classList.add(`tema-${tema}`);

    localStorage.setItem("tema", tema);
  }, [tema]);

  useEffect(() => {
    document.body.classList.remove(
      "letra-chica",
      "letra-normal",
      "letra-grande",
    );

    document.body.classList.add(`letra-${tamanoLetra}`);

    localStorage.setItem("tamanoLetra", tamanoLetra);
  }, [tamanoLetra]);

  return (
    <div className="configuracion">
      <button className="btn-config" onClick={() => setAbierto(!abierto)}>
        ⚙️
      </button>

      {abierto && (
        <div className="config-menu">
          <h3>Configuración</h3>

          <div className="config-item">
            <label>Tema</label>

            <select value={tema} onChange={(e) => setTema(e.target.value)}>
              <option value="claro">Claro</option>

              <option value="oscuro">Oscuro</option>
            </select>
          </div>

          <div className="config-item">
            <label>Tamaño</label>

            <select
              value={tamanoLetra}
              onChange={(e) => setTamanoLetra(e.target.value)}
            >
              <option value="chica">Chica</option>

              <option value="normal">Normal</option>

              <option value="grande">Grande</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}

export default Configuracion;
