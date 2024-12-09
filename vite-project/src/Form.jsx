import { useState } from 'react';
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

  const steps = [
    "Seguridad Social",
    "Ingresos",
    "Gastos Mensuales",
    "Gastos Anuales",
    "Patrimonio",
    "Objetivos Financieros"
  ];

console.log(datosMongo.cedula)


const handleSubmit = async (e) => {
  e.preventDefault();

  // Obtenemos todos los elementos con el atributo data-section
  const sections = document.querySelectorAll('[data-section]');
  const formData = {};

  sections.forEach(section => {
    const sectionName = section.getAttribute('data-section');
    formData[sectionName] = {}; // Creamos un objeto vacío para cada sección

    const inputs = section.querySelectorAll('input');
    const placeholdersCount = {}; // Para contar los placeholders

    // Contamos los placeholders para gestionar casos con inputs similares
    inputs.forEach(input => {
      const placeholder = input.placeholder || 'Campo sin placeholder';
      if (placeholdersCount[placeholder]) {
        placeholdersCount[placeholder] += 1;
      } else {
        placeholdersCount[placeholder] = 1;
      }
    });

    // Ahora recorremos los inputs y recogemos los datos
    inputs.forEach(input => {
      const placeholder = input.placeholder || 'Campo sin placeholder';
      const value = input.value.trim();

      if (value) {
        // Si hay más de un input con el mismo placeholder, lo agregamos como array
        if (placeholdersCount[placeholder] > 1) {
          if (formData[sectionName][placeholder]) {
            formData[sectionName][placeholder].push(value);
          } else {
            formData[sectionName][placeholder] = [value];
          }
        } else {
          formData[sectionName][placeholder] = value;
        }
      }
    });
  });

  // Agregamos el dato de 'cedula' al formData antes de enviarlo
  formData.datosMongo = { ...formData.datosMongo, cedula: datosMongo.cedula };

  // Mostrar los datos para revisión
  console.log(formData);

  try {
    // Realizamos el envío de los datos con axios
    const response = await axios.post('http://localhost:3001/api/actualizar', formData);

    // Manejo de la respuesta
    console.log('Datos enviados correctamente:', response.data);
  } catch (error) {
    // Manejo de errores
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
              <input type="submit" name="submit" onClick={handleSubmit} className="submit action-button" value="Enviar" />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
