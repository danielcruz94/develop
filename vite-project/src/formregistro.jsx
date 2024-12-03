import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const InputField = ({ label, type = "text", value, onChange, required = true }) => (
  <div className="input-field">
    <input
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      placeholder=" "
    />
    <label>{label}</label>
  </div>
)

const ElegantBlueFinancialPlanningForm = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    nombre: '', apellidos: '', cedula: '', fechaNacimiento: '', lugarNacimiento: '', edad: '',
    direccionCasa: '', direccionOficina: '', celular: '', telefonoCasa: '', telefonoOficina: '',
    empresa: '', cargo: '', fechaIngreso: '', tipoContratacion: '', profesion: '', universidad: '',
    correoElectronico: '', declaranteRenta: '', estadoCivil: ''
  })

  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
    // Aquí iría la lógica para enviar los datos
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Información Personal</h3>
            <InputField label="Nombre" value={formData.nombre} onChange={handleInputChange('nombre')} />
            <InputField label="Apellidos" value={formData.apellidos} onChange={handleInputChange('apellidos')} />
            <InputField label="Cédula de Ciudadanía" value={formData.cedula} onChange={handleInputChange('cedula')} />
            <InputField label="Fecha de Nacimiento" type="date" value={formData.fechaNacimiento} onChange={handleInputChange('fechaNacimiento')} />
            <InputField label="Lugar de Nacimiento" value={formData.lugarNacimiento} onChange={handleInputChange('lugarNacimiento')} />
            <InputField label="Edad" type="number" value={formData.edad} onChange={handleInputChange('edad')} />
          </motion.div>
        )
      case 2:
        return (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Información de Contacto</h3>
            <InputField label="Dirección Casa" value={formData.direccionCasa} onChange={handleInputChange('direccionCasa')} />
            <InputField label="Dirección Oficina" value={formData.direccionOficina} onChange={handleInputChange('direccionOficina')} />
            <InputField label="Celular" type="tel" value={formData.celular} onChange={handleInputChange('celular')} />
            <InputField label="Teléfono Casa" type="tel" value={formData.telefonoCasa} onChange={handleInputChange('telefonoCasa')} />
            <InputField label="Teléfono Oficina" type="tel" value={formData.telefonoOficina} onChange={handleInputChange('telefonoOficina')} />
          </motion.div>
        )
      case 3:
        return (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Información Laboral</h3>
            <InputField label="Empresa" value={formData.empresa} onChange={handleInputChange('empresa')} />
            <InputField label="Cargo" value={formData.cargo} onChange={handleInputChange('cargo')} />
            <InputField label="Fecha de Ingreso Compañía" type="date" value={formData.fechaIngreso} onChange={handleInputChange('fechaIngreso')} />
            <InputField label="Tipo de contratación" value={formData.tipoContratacion} onChange={handleInputChange('tipoContratacion')} />
            <InputField label="Profesión" value={formData.profesion} onChange={handleInputChange('profesion')} />
            <InputField label="Universidad" value={formData.universidad} onChange={handleInputChange('universidad')} />
          </motion.div>
        )
      case 4:
        return (
          <motion.div
            key="step4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <h3>Información Adicional</h3>
            <InputField label="Correo Electrónico" type="email" value={formData.correoElectronico} onChange={handleInputChange('correoElectronico')} />
            <div className="select-field">
              <select 
                value={formData.declaranteRenta} 
                onChange={handleInputChange('declaranteRenta')}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="si">Sí</option>
                <option value="no">No</option>
              </select>
              <label>Declarante de Renta</label>
            </div>
            <div className="select-field">
              <select 
                value={formData.estadoCivil} 
                onChange={handleInputChange('estadoCivil')}
                required
              >
                <option value="">Seleccione una opción</option>
                <option value="soltero">Soltero/a</option>
                <option value="casado">Casado/a</option>
                <option value="divorciado">Divorciado/a</option>
                <option value="viudo">Viudo/a</option>
                <option value="unionLibre">Unión Libre</option>
              </select>
              <label>Estado Civil</label>
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="form-container">
      <div className="form-content">
        <h2>Planeación Financiera</h2>
        <div className="progress-bar">
          {[1, 2, 3, 4].map((step) => (
            <div 
              key={step} 
              className={`progress-step ${currentStep >= step ? 'active' : ''}`}
              onClick={() => setCurrentStep(step)}
            >
              {step}
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
          <div className="button-group">
            {currentStep > 1 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={prevStep}
                className="btn-secondary"
              >
                Anterior
              </motion.button>
            )}
            {currentStep < 4 ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={nextStep}
                className="btn-primary"
              >
                Siguiente
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="btn-submit"
              >
                Enviar
              </motion.button>
            )}
          </div>
        </form>
      </div>

      <style jsx>{`
        body {
          background-color: #06175C;
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
        }

        .form-container {
          max-width: 600px;
          margin: 2rem auto;
          background-color: white;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          overflow: hidden;
        }

        .form-content {
          padding: 3rem;
        }

        h2 {
          text-align: center;
          color: #06175C;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: 300;
        }

        h3 {
          color: #06175C;
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          font-weight: 400;
        }

        .progress-bar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .progress-step {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: #e0e0e0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .progress-step.active {
          background-color: #06175C;
        }

        .input-field, .select-field {
          position: relative;
          margin-bottom: 1.5rem;
        }

        .input-field input, .select-field select {
          width: 100%;
          padding: 10px 0;
          font-size: 16px;
          color: #333;
          border: none;
          border-bottom: 1px solid #bdc3c7;
          outline: none;
          background: transparent;
          transition: all 0.3s ease;
        }

        .input-field label, .select-field label {
          position: absolute;
          top: 10px;
          left: 0;
          font-size: 16px;
          color: #7f8c8d;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        .input-field input:focus ~ label,
        .input-field input:not(:placeholder-shown) ~ label,
        .select-field select:focus ~ label,
        .select-field select:not(:placeholder-shown) ~ label {
          top: -20px;
          font-size: 12px;
          color: #06175C;
        }

        .input-field input:focus,
        .select-field select:focus {
          border-bottom: 2px solid #06175C;
        }

        .button-group {
          display: flex;
          justify-content: space-between;
          margin-top: 2rem;
        }

        button {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn-primary, .btn-submit {
          background-color: #06175C;
          color: white;
        }

        .btn-secondary {
          background-color: #ecf0f1;
          color: #06175C;
        }

        button:hover {
          opacity: 0.9;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .form-container {
            margin: 1rem;
          }

          .form-content {
            padding: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default ElegantBlueFinancialPlanningForm