import React, { useState } from 'react';
import './styles.css';
import Selector from './select';
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
} from './DatosSelect';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Seguridad Social",
    "Ingresos",
    "Gastos Mensuales",
    "Gastos Anuales",
    "Patrimonio",
    "Objetivos Financieros"
  ];

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
           
             <h2 className="fs-title">Seguridad Social</h2>
              <Selector options={seguridadsocial}/>
              <br />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 1 ? 'block' : 'none' }}>
            <h2 className="fs-title">Ingresos</h2>
              <Selector options={ingresos}/>
              <br />
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 2 ? 'block' : 'none' }}>
              <h2>Gastos Mensuales</h2>
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 3 ? 'block' : 'none' }}>
              <h2>Gastos Anuales</h2>
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 4 ? 'block' : 'none' }}>
              <h2>Patrimonio</h2>
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="button" name="next" className="next action-button" value="Siguiente" onClick={handleNext} />
            </fieldset>

            <fieldset style={{ display: currentStep === 5 ? 'block' : 'none' }}>
              <h2>Objetivos Financieros</h2>
              <input type="button" name="previous" className="previous action-button-previous" value="Anterior" onClick={handlePrevious} />
              <input type="submit" name="submit" className="submit action-button" value="Enviar" />
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
