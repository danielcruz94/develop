import{ useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./formregistro.css"


const InputField = ({ label, type = "text", value, onChange, required = false }) => (
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
    correoElectronico: '', declaranteRenta: '', estadoCivil: '' , contraseña: ''
  })

  const navigate = useNavigate(); 
  
  const handleInputChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación de campos vacíos
    const requiredFields = [
      'nombre', 'apellidos', 'cedula', 'fechaNacimiento', 'lugarNacimiento', 'edad',
      'direccionCasa', 'direccionOficina', 'celular', 'telefonoCasa', 'telefonoOficina',
      'empresa', 'cargo', 'fechaIngreso', 'tipoContratacion', 'profesion', 'universidad',
      'correoElectronico', 'declaranteRenta', 'estadoCivil', 'contraseña'
    ];
  
    for (let field of requiredFields) {
      if (!formData[field]) {
        alert(`El campo ${field} es obligatorio.`);
        return;
      }
    }
  
    // Depuración: Verificar los datos que se van a enviar
    console.log("Datos a enviar:", formData);
  
    // URL del servidor (puedes cambiarla según tu entorno)
    const serverUrl = 'http://localhost:3001/api/clientes';
  
    try {
      const response = await axios.post(serverUrl, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Depuración: Mostrar la respuesta del servidor
      console.log("Respuesta del servidor:", response);
  
      // Cambiar el código de estado a 201 para una creación exitosa
      if (response.status === 201) {

        localStorage.setItem('cedula', response.data.cedula); 
        navigate('/formulario');
      } else {
        alert('Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.');
      }
    } catch (error) {
      // Depuración: Mostrar detalles del error
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario. Por favor, revisa tu conexión y vuelve a intentarlo.');
    }
  };
  
  
  
  

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
            <InputField label="Cédula de Ciudadanía"  type="number" value={formData.cedula} onChange={handleInputChange('cedula')} />
            <InputField label="Fecha de Nacimiento" type="date" value={formData.fechaNacimiento} onChange={handleInputChange('fechaNacimiento')} />
            <InputField label="Lugar de Nacimiento" value={formData.lugarNacimiento} onChange={handleInputChange('lugarNacimiento')} />
            <InputField label="Edad" type="number" value={formData.edad} onChange={handleInputChange('edad')} />

            <select 
              className='selectsex'
              value={formData.sexo} 
              onChange={handleInputChange('sexo')}
              required
            >
              <option value="">Sexo</option>
              <option value="hombre">Hombre</option>
              <option value="mujer">Mujer</option>
            </select>

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
            <InputField label="Celular" type="number" value={formData.celular} onChange={handleInputChange('celular')} />
            <InputField label="Teléfono Casa" type="number" value={formData.telefonoCasa} onChange={handleInputChange('telefonoCasa')} />
            <InputField label="Teléfono Oficina" type="number" value={formData.telefonoOficina} onChange={handleInputChange('telefonoOficina')} />
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

            <InputField label="Correo Electrónico" type="email" value={formData.correoElectronico} onChange={handleInputChange('correoElectronico')} />
            <InputField label="Contraseña"  type="password"   value={formData.contraseña}   onChange={handleInputChange('contraseña')} />
            
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
           {currentStep <4 ? (
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
                 <button className="btn-submit" type="submit" >Enviar</button>              
            )}
          </div>
        </form>
      </div>

    </div>
  )
}

export default ElegantBlueFinancialPlanningForm