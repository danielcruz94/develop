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

    axios.get(`http://localhost:3001/api/cliente/${cedulaRecuperada}/fieldset`)
      .then(response => {
        console.log(response.data.fieldset)

            if (response.data.fieldset <= 5) {
              setCurrentStep(response.data.fieldset);
              
          } else {
              window.location.href = 'https://axia.com.co/';
          }
        
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    console.log("La cédula no está disponible.");
  }
}, []);



// Función para recolectar los datos del formulario
const collectFormData = () => {
  const formData = {};

  // Seleccionar todos los fieldsets
  const fieldsets = document.querySelectorAll('fieldset');

  // Función interna para procesar las secciones dentro de un fieldset visible
  const processSection = (section) => {
      const sectionData = {};
      const inputs = section.querySelectorAll('input');
      const placeholdersCount = {}; // Contador de ocurrencias de los 'name'

      inputs.forEach(input => {
          const placeholder = input.name || 'Campo sin name';
          placeholdersCount[placeholder] = (placeholdersCount[placeholder] || 0) + 1;
      });

      inputs.forEach(input => {
          const placeholder = input.name || 'Campo sin name';
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

      const subsections = section.querySelectorAll('[data-section]');
      subsections.forEach(subsection => {
          const subData = processSection(subsection); // Procesar subsección
          sectionData[subsection.getAttribute('data-section')] = subData;
      });

      return sectionData;
  };

  // Recolectar los datos solo de los fieldsets visibles (display: block)
  fieldsets.forEach(fieldset => {
      // Verificar si el fieldset está visible (display: block)
      if (window.getComputedStyle(fieldset).display === 'block') {
          const sections = fieldset.querySelectorAll('[data-section]'); // Buscar todas las secciones dentro de este fieldset

          sections.forEach(section => {
              const sectionName = section.getAttribute('data-section');
              const validValues = [
                  'SalarioTradicional', 'SalarioIntegral', 'Arriendo', 'Auxilio', 
                  'Beneficio', 'Bonificacion', 'Comisiones', 'Dividendos', 
                  'Honorarios', 'PrimaDeServicios', 'PrimaExtralegal', 'Renta', 
                  'SubsidioDeTransporte', 'SubsidioFamiliar'
              ];

              // Solo procesar secciones dentro del fieldset visible
              if (sectionName === 'ingresos') {
                  if (!formData.ingresos) formData.ingresos = {};
                  const subsections = section.querySelectorAll('[data-section]');
                  subsections.forEach(subsection => {
                      const subData = processSection(subsection);
                      formData.ingresos[subsection.getAttribute('data-section')] = subData;
                  });
              } else if (!validValues.includes(sectionName)) {
                  formData[sectionName] = processSection(section);
              }
          });
      }
  });

  // Agregar cédula al objeto final (si es necesario)
  formData.datosMongo = { ...formData.datosMongo, cedula , fieldset: currentStep+1 };

  return formData;
};



      // Función para enviar los datos al servidor
      const sendFormData = async (formData) => {
        try {
            const response = await axios.put('http://localhost:3001/api/actualizar', formData);            
              window.location.href = 'https://axia.com.co/';
        } catch (error) {
            console.error('Error al enviar los datos:', error);
        }
      };
   
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = collectFormData();       
      sendFormData(formData);           
    };


  


const handleNext = async () => {
   
    const formData = collectFormData(); // Recolectamos los datos
    console.log(formData); 

    // Enviamos los datos al servidor
    try {
       
        const response = await axios.put('http://localhost:3001/api/actualizar', formData);
        console.log(response.data); 
     
        if (currentStep < steps.length - 1) {            
            setCurrentStep(currentStep + 1);  // Avanzar al siguiente paso
        } 
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        
    }
};

/*
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
*/    
  
  

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
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 5 ? 'block' : 'none' }}>
              <h2>Objetivos Financieros</h2>
                <Objetivos seccion="objetivos"/>
                <h2>Deudas Corto Plazo</h2>
                <Deudas  seccion="DeudasCortoPlazo"/>
                <h2>Deudas Largo Plazo</h2>
                <Deudas  seccion="DeudasLargoPlazo"/>
              {/*<input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />*/}
              <input type="submit" name="submit" onClick={handleSubmit} className="submit action-button" value="Finalizar" />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
