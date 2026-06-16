import LayoutCV from "../componentes/LayoutCV";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useContext } from "react";
import { CVContext } from "../contexto/CVContext";

function VistaPrevia() {

  const { datosCV } = useContext(CVContext);

  const validarCV = () => {

    if (
      !datosCV.nombre.trim() ||
      !datosCV.profesion.trim() ||
      !datosCV.correo.trim() ||
      !datosCV.telefono.trim() ||
      !datosCV.perfil.trim()
    ) {

      alert(
        "Por favor completa todos los campos obligatorios antes de generar el PDF."
      );

      return false;
    }

    const correoValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!correoValido.test(datosCV.correo)) {

      alert(
        "Ingresa un correo electrónico válido."
      );

      return false;
    }

    return true;
  };

  const descargarPDF = async () => {

    if (!validarCV()) return;

    const elemento =
      document.getElementById("cv-pdf");

    const canvas =
      await html2canvas(elemento, {
        scale: 2,
      });

    const imgData =
      canvas.toDataURL("image/png");

    const pdf =
      new jsPDF(
        "p",
        "mm",
        "a4"
      );

    const anchoPDF = 210;

    const altoPDF =
      (canvas.height * anchoPDF) /
      canvas.width;

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      anchoPDF,
      altoPDF
    );

    pdf.save("Curriculum.pdf");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <LayoutCV />

      <button
        className="btn-pdf"
        onClick={descargarPDF}
      >
        Descargar PDF
      </button>
    </div>
  );
}

export default VistaPrevia;