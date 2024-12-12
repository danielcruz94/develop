import { useState, useEffect } from 'react';
import './styles.css';
import Selector from './select';
import Objetivos from './ObjectiveInputForm';
import { useSelector } from 'react-redux';
import Deudas from './DeudasInputForm';
import axios from 'axios';  

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

} from './DatosSelect';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const datosMongo = useSelector((state) => state.datosMongo.datosMongo);
  const [cedula, setCedula] = useState("");

  const steps = [
    "Seguridad Social",
    "Ingresos",
    "Gastos Mensuales",
    "Gastos Anuales",
    "Patrimonio",
    "Objetivos Financieros"
  ];

  useEffect(() => {
    const cedulaExistente = localStorage.getItem('cedula');

    if (!cedulaExistente) {
      setCedula(datosMongo.cedula);
      localStorage.setItem('cedula', datosMongo.cedula);
    }

    const cedulaRecuperada = localStorage.getItem('cedula');

    if (cedulaRecuperada) {
      setCedula(cedulaRecuperada);
    } else {
      console.log("La cedula no está disponible.");
    }
  }, []);


 const handleSubmit = async (e) => {
    e.preventDefault();
  
    const sections = document.querySelectorAll('[data-section]');
    const formData = {};
  
    // Función para procesar las secciones
    const processSection = (section) => {
        const sectionName = section.getAttribute('data-section');
        const sectionData = {};
  
        const inputs = section.querySelectorAll('input');
        const placeholdersCount = {}; 

        // Contamos las ocurrencias de los nombres de los campos (name)
        inputs.forEach(input => {
            const placeholder = input.name || 'Campo sin name';
            if (placeholdersCount[placeholder]) {
                placeholdersCount[placeholder] += 1;
            } else {
                placeholdersCount[placeholder] = 1;
            }
        });

        // Guardamos los valores de los inputs en el objeto sectionData
        inputs.forEach(input => {
            const placeholder = input.name || 'Campo sin name';
            const value = input.value.trim();
  
            if (value) {
                if (placeholdersCount[placeholder] > 1) {
                    // Si hay varios campos con el mismo nombre, los almacenamos en un array
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

        // Buscamos subsecciones dentro de la sección
        const subsections = section.querySelectorAll('[data-section]');
        subsections.forEach(subsection => {
            const subData = processSection(subsection); // Procesamos recursivamente las subsecciones
            sectionData[subsection.getAttribute('data-section')] = subData; // Asignamos la subsección como objeto
        });

        return sectionData;
    };

    // Procesamos cada sección principal y almacenamos los datos en formData
    sections.forEach(section => {
        const sectionName = section.getAttribute('data-section');
        formData[sectionName] = processSection(section);
    });

    // Deudas Corto Plazo (lógica específica sin cambios)
    formData.DeudasCortoPlazo = [];
    const cortoPlazoSections = document.querySelectorAll('[data-section="DeudasCortoPlazo"] input');
    cortoPlazoSections.forEach((input, index) => {
        const name = input.name;
        const value = input.value.trim();
        if (value) {
            const deudaIndex = Math.floor(index / 6);
            if (!formData.DeudasCortoPlazo[deudaIndex]) {
                formData.DeudasCortoPlazo[deudaIndex] = {};
            }
            formData.DeudasCortoPlazo[deudaIndex][name] = value;
        }
    });

    // Deudas Largo Plazo (lógica específica sin cambios)
    formData.DeudasLargoPlazo = [];
    const largoPlazoSections = document.querySelectorAll('[data-section="DeudasLargoPlazo"] input');
    largoPlazoSections.forEach((input, index) => {
        const name = input.name;
        const value = input.value.trim();
        if (value) {
            const deudaIndex = Math.floor(index / 6);
            if (!formData.DeudasLargoPlazo[deudaIndex]) {
                formData.DeudasLargoPlazo[deudaIndex] = {};
            }
            formData.DeudasLargoPlazo[deudaIndex][name] = value;
        }
    });

    // Objetivos (lógica específica sin cambios)
    formData.objetivos = [];
    const objetivoSections = document.querySelectorAll('[data-section="objetivos"] input');
    objetivoSections.forEach((input, index) => {
        const name = input.name;
        const value = input.value.trim();
        if (value) {
            const objetivoIndex = Math.floor(index / 5);
            if (!formData.objetivos[objetivoIndex]) {
                formData.objetivos[objetivoIndex] = {};
            }
            formData.objetivos[objetivoIndex][name] = value;
        }
    });

    // Agregar datos adicionales
    formData.datosMongo = { ...formData.datosMongo, cedula: cedula };
  
    console.log(formData);

    try {
        const response = await axios.put('http://localhost:3001/api/actualizar', formData);
        console.log('Datos enviados correctamente:', response.data);
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
};

  



  const handleNext = () => {
    if (currentStep < steps.length - 1) {
     
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

        
  
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div id="msform">
            <img src="./axia-logo.png" alt="logo" />

          <div className='progressbar'>
           <ul id="progressbar">
              {steps.map((step, index) => (
                <li key={index} className={index <= currentStep ? "active" : ""}>
                  {step}
                </li>
              ))}
            </ul>  
          </div>
            

            {/* Render the corresponding fieldset based on current step */}
            <fieldset style={{ display: currentStep === 0 ? 'block' : 'none' }}>
           
             <h2>Seguridad Social</h2>
             <Selector options={seguridadsocial} seccion="seguridadsocial" />
              <br />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 1 ? 'block' : 'none' }}>
            <h2>Ingresos</h2>
              <Selector options={ingresos} seccion="ingresos"/>
              <br />
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 2 ? 'block' : 'none' }}>
              <h2>Gastos Mensuales</h2>

              <h2 className="fs-title">Ahorro</h2>
              <Selector options={ahorro} seccion="Ahorro"/>
              <h2 className="fs-title">Transporte</h2>
              <Selector options={transporte} seccion="Transporte"/>
              <br />
              <h2 className="fs-title"> Gastos Personales</h2>
              <Selector options={gastosPersonales} seccion="gastosPersonales"/>
              <br />
              <h2 className="fs-title">Hogar</h2>
              <Selector options={hogar} seccion="hogar"/>
              <br />
              <h2 className="fs-title">Entretenimiento</h2>
              <Selector options={entretenimiento} seccion="entretenimiento"/>
              <br />
              <h2 className="fs-title">Protecciones Personales</h2>
              <Selector options={protecciones} seccion="protecciones"/>
              <br />
              <h2 className="fs-title">Descuentos de Nomina</h2>
              <Selector options={descuentosnomina} seccion="descuentosnomina"/>
              <br />
              <h2 className="fs-title">Educacion</h2>
              <Selector options={educacion} seccion="educacion"/>
              <br />
              <h2 className="fs-title">Financieros</h2>
              <Selector options={financieros} seccion="financieros" />
              <br />
              <h2 className="fs-title">Otros</h2>
              <Selector options={otros} seccion="otros"/>  
              <br />
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            {/*REVISAR EL ERROR DE LA LISTA */}
            <fieldset style={{ display: currentStep === 3 ? 'block' : 'none' }}>
              <h2>Gastos Anuales</h2>
              <h2 className="fs-title">Seguros</h2>
              
              <Selector options={seguros} seccion="seguros"/>
              <br />
              <h2 className="fs-title">Anualidades Fijas</h2>
              <Selector options={anualidadesFijas} seccion="AnualidadesFijas"/>
              <br />
              <h2 className="fs-title">Anualidades Presupuestadas</h2>
              <Selector options={anualidadesPresupuestadas} seccion="AnualidadesPresupuestadas"/>
              <br />
              <h2 className="fs-title"> Impuestos</h2>
              <Selector options={impuestos} seccion="Impuestos"/>
              <br />
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 4 ? 'block' : 'none' }}>
              <h2>Patrimonio</h2>
              <h2 className="fs-title">Activos Liquidos</h2>
              <Selector options={activoLiquidos} seccion="activoLiquidos"/>
              <br />
              <h2 className="fs-title">Activos Productivos</h2>
              <Selector options={activosProductivos} seccion="activosProductivos"/>
              <br />
              <h2 className="fs-title">Activos improductivos</h2>
              <Selector options={activosImproductivos} seccion="activosImproductivos"/>
              <br />
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 5 ? 'block' : 'none' }}>
              <h2>Objetivos Financieros</h2>
                <Objetivos seccion="objetivos"/>
                <h2>Deudas Corto Plazo</h2>
                <Deudas  seccion="DeudasCortoPlazo"/>
                <h2>Deudas Largo Plazo</h2>
                <Deudas  seccion="DeudasLargoPlazo"/>
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="submit" name="submit" onClick={handleSubmit} className="submit action-button" value="Guardar" />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
