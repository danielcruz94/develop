import { useState, useEffect } from "react";
import "./styles.css";
import Selector from "./select";
import Objetivos from "./ObjectiveInputForm";
import { useSelector } from "react-redux";
import Deudas from "./DeudasInputForm";
import axios from "axios";

import DynamicInputs from "./DynamicFloatingSelects"; // Importamos el componente DynamicInputs

import {
  seguridadsocial,
  ingresos,
  ahorro,
  transporte,
  gastosPersonales,
  hogar,
  entretenimiento,
  protecciones,
  descuentosnomina,
  educacion,
  financieros,
  otros,
  activoLiquidos,
  activosProductivos,
  activosImproductivos,
  seguros,
  anualidadesPresupuestadas,
  impuestos,
  anualidadesFijas,
  ingresosanuales,
} from "./DatosSelect";

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const datosMongo = useSelector((state) => state.datosMongo.datosMongo);
  const [cedula, setCedula] = useState("");

  const serverURL = useSelector((state) => state.serverURL.serverURL);

  const [isDataLoaded, setIsDataLoaded] = useState(true);
  const [data, setData] = useState(null);

  const steps = [
    "Seguridad Social",
    "Ingresos",
    "Gastos Mensuales",
    "Gastos Anuales",
    "Activos",
    "Deudas",
    "Objetivos Financieros",
  ];

  useEffect(() => {
     setTimeout(() => { setIsDataLoaded(false); }, 3000);
  }, []);

  useEffect(() => {
    const cedulaExistente = localStorage.getItem("cedula");

    if (!cedulaExistente) {
      setCedula(datosMongo.cedula);
      localStorage.setItem("cedula", datosMongo.cedula);
    }

    const cedulaRecuperada = localStorage.getItem("cedula");

    if (cedulaRecuperada) {
      setCedula(cedulaRecuperada);

      axios
        .get(`${serverURL}cliente/${cedulaRecuperada}/fieldset`)
        .then((response) => {
          if (response.data.fieldset <= 6) {
            setData(response.data);            
            setCurrentStep(response.data.fieldset);
          } else {
            localStorage.removeItem("authToken");
            window.location.href = "https://axia.com.co/";
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("La cédula no está disponible.");
    }
  }, []);

  useEffect(() => {
    setIsDataLoaded(false);
  }, [data]);

  const collectFormData = () => {
    const formData = {};

    const fieldsets = document.querySelectorAll("fieldset");

    const processSection = (section) => {
      const sectionData = {};
      const inputs = section.querySelectorAll("input");
      const placeholdersCount = {};

      inputs.forEach((input) => {
        const placeholder = input.name || "Campo sin name";
        placeholdersCount[placeholder] =
          (placeholdersCount[placeholder] || 0) + 1;
      });

      inputs.forEach((input) => {
        const placeholder = input.name || "Campo sin name";
        const value = input.value.trim();
        if (value) {
          if (placeholdersCount[placeholder] > 1) {
            if (sectionData[placeholder]) {
              sectionData[placeholder].push(value);
            } else {
              sectionData[placeholder] = [value];
            }
          } else {
            sectionData[placeholder] = value;
          }
        }
      });

      const subsections = section.querySelectorAll("[data-section]");
      subsections.forEach((subsection) => {
        const subData = processSection(subsection);
        sectionData[subsection.getAttribute("data-section")] = subData;
      });

      return sectionData;
    };

    fieldsets.forEach((fieldset) => {
      if (window.getComputedStyle(fieldset).display === "block") {
        const sections = fieldset.querySelectorAll("[data-section]");

        sections.forEach((section) => {
          const sectionName = section.getAttribute("data-section");
          const validValues = [
            "Salario_Tradicional",
            "Salario_Integral",
            "Arriendo",
            "Auxilio",
            "Beneficio",
            "Bonificacion",
            "Comisiones",
            "Dividendos",
            "Honorarios",
            "Prima_De_Servicios",
            "Prima_Extra_legal",
            "Renta",
            "Subsidio_De_Transporte",
            "Subsidio_Familiar",
          ];

          if (sectionName === "ingresos") {
            if (!formData.ingresos) formData.ingresos = {};

            const subsections = section.querySelectorAll("[data-section]");
            subsections.forEach((subsection) => {
              const subData = processSection(subsection);
              const subsectionKey = subsection.getAttribute("data-section");

              if (formData.ingresos[subsectionKey]) {
                if (Array.isArray(formData.ingresos[subsectionKey])) {
                  formData.ingresos[subsectionKey].push(subData);
                } else {
                  formData.ingresos[subsectionKey] = [
                    formData.ingresos[subsectionKey],
                    subData,
                  ];
                }
              } else {
                formData.ingresos[subsectionKey] = subData;
              }
            });
          } else if (!validValues.includes(sectionName)) {
            formData[sectionName] = processSection(section);
          }
        });
      }
    });

    formData.datosMongo = {
      ...formData.datosMongo,
      cedula,
      fieldset: currentStep + 1,
    };

    return formData;
  };

  const sendFormData = async (formData) => {
    try {
      const response = await axios.put(`${serverURL}actualizar`, formData);
      localStorage.removeItem("authToken");
      window.location.href = "https://axia.com.co/";
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = collectFormData();
    sendFormData(formData);
  };

  const handleNext = async () => {
    const formData = collectFormData();
    console.log(formData);

    try {
      const response = await axios.put(`${serverURL}actualizar`, formData);

      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const handlePrev = async () => {
    try {
      if (currentStep > 0) {
        setCurrentStep(currentStep - 1);
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  if (isDataLoaded) {
    return <div className="loading"></div>;
  }

  return (
    <div className="container">
      <div className="logout-button-container">
        <button className="logout-button" onClick={handleLogout}>
          {/* Icono de Bootstrap */}
          <i className="bi bi-box-arrow-right"></i>{" "}
          {/* Icono de cerrar sesión */}
        </button>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div id="msform">
            <img src="axia-logo.png" alt="logo" />

            <div className="progressbar">
              <ul id="progressbar">
                {steps.map((step, index) => (
                  <li
                    key={index}
                    className={index <= currentStep ? "active" : ""}
                  >
                    <p>{step} </p>
                  </li>
                ))}
              </ul>
            </div>

            <fieldset style={{ display: currentStep === 0 ? "block" : "none" }}>
            <h2>Seguridad Social</h2>
            <div className="INFO">
            <span  >Por favor, selecciona las opciones que te correspondan de la siguiente lista y luego indica el valor específico (entidad) para cada opción seleccionada.</span>

            </div>
            <br />
             <br />              {data?.seguridadsocial ? (
                <Selector
                  options={seguridadsocial}
                  seccion="seguridadsocial"
                  data={data.seguridadsocial}
                />
              ) : (
                <Selector options={seguridadsocial} seccion="seguridadsocial" />
              )}
              <br />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Siguiente"
                onClick={handleNext}
              />
            </fieldset>

            <fieldset style={{ display: currentStep === 1 ? "block" : "none" }}>
              <h2>Ingresos Mensuales</h2>
              <div className="INFO">
            <span style={{'fontSize':'12px'}}>Por favor, selecciona las <b>opciones </b> que te correspondan de la siguientes listas, luego registra el  <b>monto</b> de lo que gastas al mes.Recuerda que estos gastos son unicamente los que se realizan <b>mensualmente</b> como Arriendo,Servicios publicos, etc.</span>
              
            </div>
              {data?.ingresos ? (
                <Selector
                  options={ingresos}
                  seccion="ingresos"
                  data={data.ingresos}
                />
              ) : (
                <Selector options={ingresos} seccion="ingresos" />
              )}

              <br />

              <h2>Ingresos Anuales</h2>
              <div className="INFO">
              <span > <b>Recuerda:</b> La idea es solo poner en este registro el dinero que recibes de forma <b>Anual</b> Ej:Primas, Dividendos, Bonos, Bonificaciones, etc.</span>
              
            </div>
              {data?.IngresosAnuales ? (
                <Selector
                  options={ingresosanuales}
                  seccion="IngresosAnuales"
                  data={data.IngresosAnuales}
                />
              ) : (
                <Selector options={ingresosanuales} seccion="IngresosAnuales" />
              )}

              <br />

              <input
                type="button"
                name="prev"
                className="prev action-button"
                value="Anterior"
                onClick={handlePrev}
              />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Siguiente"
                onClick={handleNext}
              />
            </fieldset>

            <fieldset style={{ display: currentStep === 2 ? "block" : "none" }}>
              <h2>Gastos Mensuales</h2>
              <h2 className="fs-title">Ahorro</h2>
              <div className="INFO">
            <span > <b>Recuerda: </b>  En este item solo deberas ingresar el monto que ahorras mensualmente,<b> NO DEBES </b>ingresar el saldo de tus ahorros ya que seran validados mas adelante.</span>
              
            </div>
              {data?.ahorro ? (
                <Selector
                  options={ahorro}
                  seccion="ahorro"
                  data={data.ahorro}
                />
              ) : (
                <Selector options={ahorro} seccion="ahorro" />
              )}
              <br />
              <h2 className="fs-title"> Gastos Personales</h2>

              {data?.gastosPersonales ? (
                <Selector
                  options={gastosPersonales}
                  seccion="gastosPersonales"
                  data={data.gastosPersonales}
                />
              ) : (
                <Selector
                  options={gastosPersonales}
                  seccion="gastosPersonales"
                />
              )}

              <br />
              <h2 className="fs-title">Hogar</h2>
              {data?.hogar ? (
                <Selector options={hogar} seccion="hogar" data={data.hogar} />
              ) : (
                <Selector options={hogar} seccion="hogar" />
              )}

              <br />
              <h2 className="fs-title">Entretenimiento</h2>
              {data?.entretenimiento ? (
                <Selector
                  options={entretenimiento}
                  seccion="entretenimiento"
                  data={data.entretenimiento}
                />
              ) : (
                <Selector options={entretenimiento} seccion="entretenimiento" />
              )}

              <br />
              <h2 className="fs-title">Protecciones Personales</h2>

              {data?.protecciones ? (
                <Selector
                  options={protecciones}
                  seccion="protecciones"
                  data={data.protecciones}
                />
              ) : (
                <Selector options={protecciones} seccion="protecciones" />
              )}
              <br />
              <h2 className="fs-title">Descuentos de Nomina</h2>

              {data?.descuentosnomina ? (
                <Selector
                  options={descuentosnomina}
                  seccion="descuentosnomina"
                  data={data.descuentosnomina}
                />
              ) : (
                <Selector
                  options={descuentosnomina}
                  seccion="descuentosnomina"
                />
              )}

              <br />
              <h2 className="fs-title">Educacion</h2>
              {data?.educacion ? (
                <Selector
                  options={educacion}
                  seccion="educacion"
                  data={data.educacion}
                />
              ) : (
                <Selector options={educacion} seccion="educacion" />
              )}
              <br />
              <h2 className="fs-title">Financieros</h2>
              {data?.financieros ? (
                <Selector
                  options={financieros}
                  seccion="financieros"
                  data={data.financieros}
                />
              ) : (
                <Selector options={financieros} seccion="financieros" />
              )}
              <br />
              <h2 className="fs-title">Otros</h2>
              {data?.otros ? (
                <Selector options={otros} seccion="otros" data={data.otros} />
              ) : (
                <Selector options={otros} seccion="otros" />
              )}
              <br />
              <input
                type="button"
                name="prev"
                className="prev action-button"
                value="Anterior"
                onClick={handlePrev}
              />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Siguiente"
                onClick={handleNext}
              />
            </fieldset>

            <fieldset style={{ display: currentStep === 3 ? "block" : "none" }}>
            <h2>Gastos Anuales</h2>

            <div className="INFO">

              <span style={{'fontSize':'12px'}}>La idea es solo poner en este registro los gastos que pagas de forma <b>Anual</b>,Ej:Soat, Impuestos, Matricula, Suscripciones Anuales,Etc.</span>
            </div>

              <h2 className="fs-title">Seguros</h2>
              {data?.seguros ? (
                <Selector
                  options={seguros}
                  seccion="seguros"
                  data={data.seguros}
                />
              ) : (
                <Selector options={seguros} seccion="seguros" />
              )}
              <br />
              <h2 className="fs-title">Anualidades Fijas</h2>
              {data?.anualidadesFijas ? (
                <Selector
                  options={anualidadesFijas}
                  seccion="anualidadesFijas"
                  data={data.anualidadesFijas}
                />
              ) : (
                <Selector
                  options={anualidadesFijas}
                  seccion="anualidadesFijas"
                />
              )}
              <br />
              <h2 className="fs-title">Anualidades Presupuestadas</h2>
              {data?.anualidadesPresupuestadas ? (
                <Selector
                  options={anualidadesPresupuestadas}
                  seccion="anualidadesPresupuestadas"
                  data={data.anualidadesPresupuestadas}
                />
              ) : (
                <Selector
                  options={anualidadesPresupuestadas}
                  seccion="anualidadesPresupuestadas"
                />
              )}
              <br />
              <h2 className="fs-title"> Impuestos</h2>
              {data?.impuestos ? (
                <Selector
                  options={impuestos}
                  seccion="impuestos"
                  data={data.impuestos}
                />
              ) : (
                <Selector options={impuestos} seccion="impuestos" />
              )}
              <br />
              <input
                type="button"
                name="prev"
                className="prev action-button"
                value="Anterior"
                onClick={handlePrev}
              />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Siguiente"
                onClick={handleNext}
              />
            </fieldset>

            <fieldset style={{ display: currentStep === 4 ? "block" : "none" }}>           
              <h2>Activos</h2>
              <h2 className="fs-title">Activos Liquidos</h2>
              <div className="INFO">
            <span > <b>Recuerda: </b>  En este item  deberas ingresar el saldo de tus productos, o dinero que tengas en efectivo. Recuerda si no recuerdas el monto puedes llenarlo despues.</span>
              
            </div>
              {data?.activoLiquidos ? (
                <Selector
                  options={activoLiquidos}
                  seccion="activoLiquidos"
                  data={data.activoLiquidos}
                />
              ) : (
                <Selector options={activoLiquidos} seccion="activoLiquidos" />
              )}
              <br />
              <h2 className="fs-title">Activos Productivos</h2>
              {data?.activosProductivos ? (
                <Selector
                  options={activosProductivos}
                  seccion="activosProductivos"
                  data={data.activosProductivos}
                />
              ) : (
                <Selector
                  options={activosProductivos}
                  seccion="activosProductivos"
                />
              )}
              <br />
              <h2 className="fs-title">Activos improductivos</h2>
              {data?.activosImproductivos ? (
                <Selector
                  options={activosImproductivos}
                  seccion="activosImproductivos"
                  data={data.activosImproductivos}
                />
              ) : (
                <Selector
                  options={activosImproductivos}
                  seccion="activosImproductivos"
                />
              )}
              <br />
              <input
                type="button"
                name="prev"
                className="prev action-button"
                value="Anterior"
                onClick={handlePrev}
              />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Siguiente"
                onClick={handleNext}
              />
            </fieldset>

            <fieldset style={{ display: currentStep === 5 ? "block" : "none" }}>
            <h2>Deudas Corto Plazo</h2>
            <div className="INFO">
            <span > <b>Recuerda: </b>  Corto plazo son aquellas deudas que tienen cuotas inferiores a 60.</span>
              
            </div>             

             {data?.DeudasCortoPlazo ? (
                <Deudas
                  seccion="DeudasCortoPlazo"
                  data={data.DeudasCortoPlazo}
                />
              ) : (
                <Deudas seccion="DeudasCortoPlazo" />
                )}


            <h2>Deudas Largo Plazo</h2>
            <div className="INFO">
            <span > <b>Recuerda: </b>  Largo plazo son aquellas deudas que tienen cuotas mayores a 60.</span>
              
            </div>
              {data?.DeudasLargoPlazo ? (
                <Deudas
                  seccion="DeudasLargoPlazo"
                  data={data.DeudasLargoPlazo}
                />
              ) : (
                <Deudas seccion="DeudasLargoPlazo" />
                )}
              <input
                type="button"
                name="prev"
                className="prev action-button"
                value="Anterior"
                onClick={handlePrev}
              />
              <input
                type="button"
                name="next"
                className="next action-button"
                value="Siguiente"
                onClick={handleNext}
              />
            </fieldset>

            <fieldset style={{ display: currentStep === 6 ? "block" : "none" }}>
              <h2 className="h2deudas" >Objetivos Financieros</h2>
              <Objetivos seccion="objetivos" />
              <input
                type="button"
                name="prev"
                className="prev action-button"
                value="Anterior"
                onClick={handlePrev}
              />
              <input
                type="submit"
                name="submit"
                onClick={handleSubmit}
                className="submit action-button"
                value="Finalizar"
              />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
