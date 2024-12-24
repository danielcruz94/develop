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
  ingresosanuales,

} from './DatosSelect';
import { path } from 'framer-motion/client';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const datosMongo = useSelector((state) => state.datosMongo.datosMongo);
  const [cedula, setCedula] = useState("");

  const serverURL = useSelector(state => state.serverURL.serverURL);

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
    

    axios.get(`${serverURL}cliente/${cedulaRecuperada}/fieldset`)
      .then(response => {       

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


const collectFormData = () => {
  const formData = {};

  const fieldsets = document.querySelectorAll('fieldset');

  const processSection = (section) => {
      const sectionData = {};
      const inputs = section.querySelectorAll('input');
      const placeholdersCount = {}; 

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
          const subData = processSection(subsection); 
          sectionData[subsection.getAttribute('data-section')] = subData;
      });

      return sectionData;
  };

  fieldsets.forEach(fieldset => {
      if (window.getComputedStyle(fieldset).display === 'block') {
          const sections = fieldset.querySelectorAll('[data-section]'); 

          sections.forEach(section => {
              const sectionName = section.getAttribute('data-section');
              const validValues = [
                  'Salario_Tradicional', 'Salario_Integral', 'Arriendo', 'Auxilio', 
                  'Beneficio', 'Bonificacion', 'Comisiones', 'Dividendos', 
                  'Honorarios', 'Prima_De_Servicios', 'Prima_Extra_legal', 'Renta', 
                  'Subsidio_De_Transporte', 'Subsidio_Familiar'
              ];

              if (sectionName === 'ingresos') {
                if (!formData.ingresos) formData.ingresos = {};
                
                const subsections = section.querySelectorAll('[data-section]');
                subsections.forEach(subsection => {
                    const subData = processSection(subsection);
                    const subsectionKey = subsection.getAttribute('data-section');
                    
                    if (formData.ingresos[subsectionKey]) {
                        if (Array.isArray(formData.ingresos[subsectionKey])) {
                            formData.ingresos[subsectionKey].push(subData);
                        } else {
                            formData.ingresos[subsectionKey] = [formData.ingresos[subsectionKey], subData];
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

  formData.datosMongo = { ...formData.datosMongo, cedula , fieldset: currentStep+1 };

  return formData;
};


    
      const sendFormData = async (formData) => {
        try {
            const response = await axios.put(`${serverURL}actualizar`, formData);            
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
   
    const formData = collectFormData(); 
    console.log(formData); 
  
    try {
       
        const response = await axios.put(`${serverURL}actualizar`, formData);       
     
        if (currentStep < steps.length - 1) {            
            setCurrentStep(currentStep + 1);  
            window.scrollTo(0, 0);

        } 
    } catch (error) {
        console.error('Error al enviar los datos:', error);
        
    }
};  

const handleLogout = () => {
   localStorage.removeItem('authToken');
   window.location.href = '/login'; 
};


  return (
    <div className="container">

      <div className="logout-button-container">
          <button className="logout-button" onClick={handleLogout}>
            {/* Icono de Bootstrap */}
            <i className="bi bi-box-arrow-right"></i> {/* Icono de cerrar sesión */}
          </button>
      </div>
    
      
      <div className="row">
        <div className="col-md-12">
          <div id="msform">
          <img src="axia-logo.png" alt="logo" />

         

          <div className='progressbar'>
           <ul id="progressbar">
              {steps.map((step, index) => (
                <li key={index} className={index <= currentStep ? "active" : ""}>
                  <p>{step} </p>
                </li>
              ))}
            </ul>  
          </div>           

          
            <fieldset style={{ display: currentStep === 0 ? 'block' : 'none' }}>
           
             <h2>Seguridad Social</h2>
             <Selector options={seguridadsocial} seccion="seguridadsocial" />
              <br />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 1 ? 'block' : 'none' }}>
            <h2>Ingresos Mensuales</h2>
              <Selector options={ingresos} seccion="ingresos"/>
              <br />

              <h2>Ingresos Anuales</h2>
              <Selector options={ingresosanuales} seccion="IngresosAnuales"/>
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
              <input type="submit" name="submit" onClick={handleSubmit} className="submit action-button" value="Finalizar" />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
