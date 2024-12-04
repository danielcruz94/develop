import "./styles.css"
import Selector from './select'


const Form =()=>{

    const options = [
        { value: 'EPS', label: 'EPS' },
        { value: 'MedicinaPrepagada', label: 'Medicina Prepagada' },
        { value: 'ARL', label: 'ARL' },
        { value: 'FondoCesantias', label: 'Fondo Cesantias' },
        { value: 'AFP', label: 'AFP' },
      ];

      const ingresos = [
        { value: 'Arriendo', label: 'Arriendo' },
        { value: 'Auxilio', label: 'Auxilio' },
        { value: 'Beneficio', label: 'Beneficio' },
        { value: 'Bonificacion', label: 'Bonificación' },
        { value: 'Comisiones', label: 'Comisiones' },
        { value: 'Dividendos', label: 'Dividendos' },
        { value: 'Honorarios', label: 'Honorarios' },
        { value: 'PrimaDeServicios', label: 'Prima de Servicios' },
        { value: 'PrimaExtralegal', label: 'Prima Extralegal' },
        { value: 'Renta', label: 'Renta' },
        { value: 'SalarioIntegral', label: 'Salario Integral' },
        { value: 'SalarioTradicional', label: 'Salario Tradicional' },
        { value: 'SubsidioDeTransporte', label: 'Subsidio de Transporte' },
        { value: 'SubsidioFamiliar', label: 'Subsidio Familiar' },
      ];

      const ahorro = [
        { value: 'AhorroOffshore', label: 'Ahorro Offshore' },
        { value: 'CarteraColectiva', label: 'Cartera Colectiva' },
        { value: 'Cooperativas', label: 'Cooperativas' },
        { value: 'CuentaAFC', label: 'Cuenta AFC' },
        { value: 'CuentaCorriente', label: 'Cuenta Corriente' },
        { value: 'CuentaDeAhorros', label: 'Cuenta de Ahorros' },
        { value: 'Fiducias', label: 'Fiducias' },
        { value: 'FondoDeEmpleados', label: 'Fondo de Empleados' },
        { value: 'FondosMutuos', label: 'Fondos Mutuos' },
        { value: 'PensionVoluntaria', label: 'Pensión Voluntaria' },
        { value: 'ProvisionAnualidades', label: 'Provisión Anualidades' },
        { value: 'Otros', label: 'Otros' },
      ];

      const transporte = [
        { value: 'BusesTransmilenio', label: 'Buses / Transmilenio' },
        { value: 'Gasolina', label: 'Gasolina' },
        { value: 'Otros', label: 'Otros' },
        { value: 'Parqueadero', label: 'Parqueadero' },
        { value: 'Taxis', label: 'Taxis' },
        { value: 'TransporteEmpresa', label: 'Transporte Empresa' },
        { value: 'TransporteEscolar', label: 'Transporte Escolar' },
      ];

      const gastosPersonales = [
        { value: 'AlmuerzosDiarios', label: 'Almuerzos Diarios' },
        { value: 'Celular', label: 'Celular' },
        { value: 'CuidadoPersonal', label: 'Cuidado Personal' },
        { value: 'DesayunosDiarios', label: 'Desayunos Diarios' },
        { value: 'Gimnasio', label: 'Gimnasio' },
        { value: 'MesadaHijos', label: 'Mesada Hijos' },
        { value: 'Ropa', label: 'Ropa' },
        { value: 'Medicamentos', label: 'Medicamentos' },
        { value: 'Barberia', label: 'Barbería' },
        { value: 'Manicure', label: 'Manicure' },
        { value: 'Peluqueria', label: 'Peluquería' },
      ];

      const hogar = [
        { value: 'Administracion', label: 'Administración' },
        { value: 'Agua', label: 'Agua' },
        { value: 'Arrendamiento', label: 'Arrendamiento' },
        { value: 'Chofer', label: 'Chofer' },
        { value: 'ComprasCasa', label: 'Compras Casa' },
        { value: 'Energia', label: 'Energía' },
        { value: 'Gas', label: 'Gas' },
        { value: 'Jardinero', label: 'Jardinero' },
        { value: 'Lavanderia', label: 'Lavandería' },
        { value: 'Mercado', label: 'Mercado' },
        { value: 'Ninera', label: 'Niñera' },
        { value: 'ServicioDomestico', label: 'Servicio Doméstico' },
        { value: 'ServiciosPublicos', label: 'Servicios Públicos' },
        { value: 'Internet', label: 'Internet' },
        { value: 'PlataformasStremm', label: 'Plataformas Stremm' },
        { value: 'Otros', label: 'Otros' },
      ];

      const entretenimiento = [
        { value: 'cines', label: 'Cines' },
        { value: 'club', label: 'Club' },
        { value: 'eventos-sociales', label: 'Eventos Sociales' },
        { value: 'fines-de-semana', label: 'Fines de Semana' },
        { value: 'golf', label: 'Golf' },
       
        { value: 'restaurantes', label: 'Restaurantes' },
        { value: 'reuniones-sociales', label: 'Reuniones Sociales' },
        { value: 'rumba', label: 'Rumba' },
        { value: 'salidas', label: 'Salidas' },
        { value: 'subscripciones', label: 'Subscripciones' },
        { value: 'tenis', label: 'Tenis' },
        { value: 'vacaciones', label: 'Vacaciones' },
        { value: 'viajes', label: 'Viajes' },
        { value: 'otros', label: 'Otros' }
      ];

      const protecciones = [
        { value: 'AporteAPensionObligatoria', label: 'Aporte a Pensión Obligatoria' },
        { value: 'AporteASaludObligatoria', label: 'Aporte a Salud Obligatoria' },
        { value: 'Otros', label: 'Otros' },
        { value: 'SaludPrepagada', label: 'Salud Prepagada' },
        { value: 'SeguroDeContenidos', label: 'Seguro de Contenidos' },
        { value: 'SeguroDeInvalidez', label: 'Seguro de Invalidez' },
        { value: 'SeguroDeResponsabilidadCivil', label: 'Seguro de Responsabilidad Civil' },
        { value: 'SeguroDeSalud', label: 'Seguro de Salud' },
        { value: 'SeguroDeVehiculo', label: 'Seguro de Vehículo' },
        { value: 'SeguroDeVida', label: 'Seguro de Vida' },
        { value: 'SeguroExequial', label: 'Seguro Exequial' },
        { value: 'SeguroVivienda', label: 'Seguro Vivienda' },
      ];

      const descuentosnomina = [
        { value: 'AporteAFondoDeSolidaridad', label: 'Aporte a Fondo de Solidaridad' },
        { value: 'AporteAFondoDeSubsistencia', label: 'Aporte a Fondo de Subsistencia' },
        { value: 'OtrosDescuentos', label: 'Otros Descuentos' },
        { value: 'RetencionEnLaFuente', label: 'Retención en la Fuente' },
        { value: 'Salud', label: 'Salud' },
        { value: 'Pension', label: 'Pensión' },
        { value: 'Otros', label: 'Otros' },
      ];
      
      const educacion = [
        { value: 'BonoEstudiantil', label: 'Bono Estudiantil' },
        { value: 'Capacitaciones', label: 'Capacitaciones' },
        { value: 'Cursos', label: 'Cursos' },
        { value: 'Idiomas', label: 'Idiomas' },
        { value: 'LibrosYUtiles', label: 'Libros y útiles' },
        { value: 'MatriculaColegio', label: 'Matrícula Colegio' },
        { value: 'MatriculaUniversidad', label: 'Matrícula Universidad' },
        { value: 'PensionColegio', label: 'Pensión Colegio' },
        { value: 'Uniformes', label: 'Uniformes' },
        { value: 'Otros', label: 'Otros' },
      ];
      
      const financieros = [
        { value: 'CuatroXMil', label: '4 x Mil' },
        { value: 'ComisionesPorAdministracion', label: 'Comisiones por Administración' },
        { value: 'CuotaDeManejoTarjetaDebito', label: 'Cuota de Manejo Tarjeta Débito' },
        { value: 'CuotaManejoTarjetaCredito', label: 'Cuota Manejo Tarjeta de Crédito' },
      ];
      
      const otros = [
        { value: 'AyudaAFamiliar', label: 'Ayuda a un Familiar' },
        { value: 'Diezmo', label: 'Diezmo' },
        { value: 'Donaciones', label: 'Donaciones' },
        { value: 'Finca', label: 'Finca' },
        { value: 'Otros', label: 'Otros' },
        { value: 'Regalos', label: 'Regalos' },
        { value: 'ResponsabilidadSocial', label: 'Responsabilidad Social' },
        { value: 'SoportePadres', label: 'Soporte Padres' },
      ];
      
      
      
      
      

return(


    
<div className="container">


    <div className="row">
      <div className="col-md-12">
     
        <div id="msform" >
            <img src="./axia-logo.png" alt="logo" />
          
          <ul id="progressbar">
            <li className="active">Seguridad Social</li>
            <li>Ingresos</li>
            <li>Gastos Mensuales</li>
            <li>Gastos Anuales</li>
            <li>Patrimonio</li>
            <li>Objetivos Financieros</li>
          </ul>
          
           {/* Seguridad Social */}

          <fieldset>
           
            <p>Incluye información personal y de seguridad social.</p>
            <p>En esta sección, te pediremos información básica sobre ti, como tu nombre, fecha de nacimiento, dirección, y detalles de seguridad social como tu número de cédula y tu EPS.</p>
            <div className="row">
          
           
              <div className="col-md-6">
                <label for="fecha">Fecha de llenado del formulario</label>

                <input type="date" id="fecha" name="fecha" placeholder="Fecha de llenado del formulario"/>
              </div>
              <h2 className="fs-title">Seguridad Social</h2>
              <Selector options={options}/>
              <br />
              <h2 className="fs-title">Ingresos</h2>
              <Selector options={ingresos}/>
              <br />
             
              <h2 className="fs-title">Ahorro</h2>
              <Selector options={ahorro}/>
              <h2 className="fs-title">Transporte</h2>
              <Selector options={transporte}/>
              <br />
              <h2 className="fs-title"> Gastos Personales</h2>
              <Selector options={gastosPersonales}/>
              <br />
              <h2 className="fs-title">Hogar</h2>
              <Selector options={hogar}/>
              <br />
              <h2 className="fs-title">Entretenimiento</h2>
              <Selector options={entretenimiento}/>
              <br />
              <h2 className="fs-title">Protecciones Personales</h2>
              <Selector options={protecciones}/>
              <br />
              <h2 className="fs-title">Descuentos de Nomina</h2>
              <Selector options={descuentosnomina}/>
              <br />
              <h2 className="fs-title">Educacion</h2>
              <Selector options={educacion}/>
              <br />
              <h2 className="fs-title">Financieros</h2>
              <Selector options={financieros}/>
              <br />
              <h2 className="fs-title">Activos Productivos</h2>
              <Selector options={ingresos}/>
              <br />
              <br />
              <h2 className="fs-title">Otros</h2>
              <Selector options={otros}/>
              <h2 className="fs-title">Activos improductivos</h2>
              <Selector options={ingresos}/>
              <div className="col-md-6">
                <select name="genero">
                  <option value="">Género</option>
                  <option value="HOMBRE">Hombre</option>
                  <option value="MUJER">Mujer</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="nombre" placeholder="Nombre"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="apellidos" placeholder="Apellidos"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="cedula" placeholder="Cédula de Ciudadanía"/>
              </div>
              <div className="col-md-6">
                <label for="fechaNacimiento">Fecha de Nacimiento</label>
                <input type="date" id="fechaNacimiento" name="fechaNacimiento" placeholder="Fecha de Nacimiento"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="lugarNacimiento" placeholder="Lugar de Nacimiento"/>
              </div>
              <div className="col-md-6">
                <input type="number" name="edad" placeholder="Edad"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="direccionCasa" placeholder="Dirección Casa"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="celular" placeholder="Celular"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="profesion" placeholder="Profesión"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="universidad" placeholder="Universidad"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="correoElectronico" placeholder="Correo Electrónico"/>
              </div>
              <div className="col-md-6">
                <select name="declaranteRenta">
                  <option value="no">¿Declarante de Renta? No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <select name="estadoCivil">
                  <option value="">Estado Civil</option>
                  <option value="soltero">Soltero</option>
                  <option value="casado">Casado</option>
                  <option value="divorciado">Divorciado</option>
                  <option value="unionLibre">Unión libre</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" name="eps" placeholder="EPS"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="prepagada" placeholder="Medicina Prepagada"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="arl" placeholder="ARL"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="fondoCesantias" placeholder="Fondo de Cesantías"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="saldoCesantias" placeholder="Saldo en Fondo de Cesantías" className="formatted-number"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <select name="afp">
                  <option value="">AFP</option>
                  <option value="Protección">Protección</option>
                  <option value="Skandia">Skandia</option>
                  <option value="Porvenir">Porvenir</option>
                  <option value="Colpensiones">Colpensiones</option>
                  <option value="Colfondos">Colfondos</option>
                </select>
              </div>
              <div className="col-md-6">
                <input type="text" name="saldoAfp" placeholder="Saldo AFP" className="formatted-number"/>
              </div>
            </div>


            <div className="row">
              <div className="col-md-6">
                <select name="salarioIntegral">
                  <option value="no">Salario integral: No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
              <div className="col-md-6">
                <select name="salarioOrdinario">
                  <option value="no">Salario ordinario: No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <select name="prestacionServicios">
                  <option value="no">Prestación servicios: No</option>
                  <option value="si">Sí</option>
                </select>
              </div>
            </div>
            <input type="button" name="next" className="next action-button" value="Siguiente"/>
          </fieldset>
          
 {/* Ingresos */}
<fieldset>
  <h2 className="fs-title">Ingresos</h2>
  <p>En esta sección, te pediremos que detalles todos tus ingresos, tanto mensuales como anuales. Esto incluye salarios, bonificaciones y otros ingresos que recibas regularmente, ten en cuenta que te preguntaremos primero por los mensuales, y posteriormente por los anuales, por lo que primas y bonificaciones que no sean mensuales deberán ser ingresados en la sección de Egresos Anuales</p>
  <h3>Ingresos Mensuales</h3>
  <p>En esta sección, especifica todos los ingresos que recibes mensualmente. Ten en cuenta ingresar el valor bruto (es decir, previo a retenciones), más adelante te pediremos ingresar cada una de las retenciones.</p>
  <label for="ingresosMensualesCount">Número de Ingresos Mensuales:</label>
  <select id="ingresosMensualesCount" name="ingresosMensualesCount"></select>
  <div id="ingresosMensualesContainer"></div>

  <h3>Ingresos Anuales</h3>
  <p>En esta sección, especifica todos los ingresos que recibes anualmente, como primas, bonificaciones anuales, etc.</p>
  <div className="row">
    <div className="col-md-6">
      <input type="text" name="primaJunio" placeholder="Valor anual de Prima Junio" className="formatted-number"/>
    </div>
    <div className="col-md-6">
      <input type="text" name="primaDiciembre" placeholder="Valor anual de Prima Diciembre" className="formatted-number"/>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <input type="text" name="primaExtralegal" placeholder="Valor anual por Prima Extralegal" className="formatted-number"/>
    </div>
    <div className="col-md-6">
      <input type="text" name="primaAdicionalDiciembre" placeholder="Valor anual de Prima Adicional Diciembre" className="formatted-number"/>
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <input type="text" name="bonificacionAnual" placeholder="Valor de Bonificación Anual" className="formatted-number"/>
    </div>
    <div className="col-md-6">
      <input type="text" name="dividendos" placeholder="Valor anual de Dividendos" className="formatted-number"/>
    </div>
  </div>
  <label for="ingresosAdicionalesCount">¿Tienes algún ingreso anual/semestral adicional? Descríbelo:</label>
  <select id="ingresosAdicionalesCount" name="ingresosAdicionalesCount"></select>
  <div id="ingresosAdicionalesContainer"></div>
  <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
  <input type="button" name="next" className="next action-button" value="Siguiente"/>
</fieldset>


          
           {/* Gastos Mensuales  */}
          <fieldset>
            <h2 className="fs-title">Gastos Mensuales</h2>
            <p>Incluye información sobre tus gastos mensuales.</p>
            <p>En esta sección, detalla todos los gastos que tienes cada mes. Esto incluye ahorros, transporte, gastos personales, gastos del hogar, entretenimiento, protecciones personales, retenciones y aportes, educación, y otros gastos.</p>
  
            <h3>Gastos de Ahorro</h3>
            <p>Especifica cuánto dinero destinas a ahorros cada mes, como fondo de empleados, cuentas AFC, pensiones voluntarias, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="fondoEmpleados" placeholder="Valor mensual Fondo de Empleados" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="cuentaAFC" placeholder="Valor mensual Cuenta AFC" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="pensionesVoluntarias" placeholder="Valor mensual Pensiones Voluntarias" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="ahorrosCuentaAhorro" placeholder="Valor mensual Ahorro en Cuenta de Ahorros" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="fondoInversionColectiva" placeholder="Valor mensual Fondo de Inversión Colectiva" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="ahorrosEfectivo" placeholder="Valor mensual Ahorros en Efectivo (pesos o Dólares)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="planAlternativoJubilacion" placeholder="Valor mensual Plan Alternativo de Jubilación" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesAhorroCount">¿Tienes algún ahorro mensual adicional? Descríbelo:</label>
            <select id="gastosAdicionalesAhorroCount" name="gastosAdicionalesAhorroCount"></select>
            <div id="gastosAdicionalesAhorroContainer"></div>
  
            <h3>Gastos de Transporte</h3>
            <p>Detalla tus gastos mensuales relacionados con transporte, como gasolina, parqueadero, taxis, peajes, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="gasolina" placeholder="Valor mensual Gasolina" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="parqueadero" placeholder="Valor mensual Parqueadero" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="taxisUber" placeholder="Valor mensual Taxis / Uber" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="peajes" placeholder="Valor mensual Peajes" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="lavadaCarro" placeholder="Valor mensual Lavada de Carro" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="transporteEmpresa" placeholder="Valor mensual Transporte de Empresa" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesTransporteCount">¿Tienes algún gasto adicional de transporte? Descríbelo:</label>
            <select id="gastosAdicionalesTransporteCount" name="gastosAdicionalesTransporteCount"></select>
            <div id="gastosAdicionalesTransporteContainer"></div>
  
            <h3>Gastos Personales</h3>
            <p>Especifica los gastos personales que tienes cada mes, como celular, cuidado personal, hobbies, medicinas, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="celular" placeholder="Valor mensual Celular" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="cuidadoPersonal" placeholder="Valor mensual Cuidado personal / Belleza / Cremas" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="peluqueriaUñas" placeholder="Valor mensual Peluquería / Uñas" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="hobbies" placeholder="Valor mensual Hobbies (bicicleta, entrenador personal, juegos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="comidaTrabajo" placeholder="Valor mensual Comida en el Trabajo Mensual (desayunos, almuerzos)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="snacksTrabajo" placeholder="Valor mensual Snacks en el Trabajo Mensual (café, etc.)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="gastosRopa" placeholder="Valor mensual Gastos de Ropa" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="medicinas" placeholder="Valor mensual Medicinas" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="googleAppleNube" placeholder="Valor mensual Aplicaciones (Google, Apple, Nube)" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesPersonalesCount">¿Tienes algún gasto personal adicional? Descríbelo:</label>
            <select id="gastosAdicionalesPersonalesCount" name="gastosAdicionalesPersonalesCount"></select>
            <div id="gastosAdicionalesPersonalesContainer"></div>
  
            <h3>Gastos Mensuales Hogar</h3>
            <p>Detalla los gastos mensuales relacionados con el hogar, como arriendo, servicios públicos, mercado, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="arriendoAdministracion" placeholder="Valor mensual Arriendo o Administración" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="gas" placeholder="Valor mensual Gas" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="luz" placeholder="Valor mensual Luz" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="agua" placeholder="Valor mensual Agua" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="caldera" placeholder="Valor mensual Caldera" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="tvInternet" placeholder="Valor mensual TV / Internet" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="mercado" placeholder="Valor mensual Mercado" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="servicioDomestico" placeholder="Valor mensual Servicio Doméstico" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="plataformasEntretenimiento" placeholder="Valor mensual Plataformas de Entretenimiento" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="rappiPrime" placeholder="Valor mensual Rappi Prime" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="domiciliosCasa" placeholder="Valor mensual Domicilios a Casa" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="gastosMascotas" placeholder="Valor mensual Gastos de Mascotas" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="lavanderia" placeholder="Valor mensual Lavandería" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="niñera" placeholder="Valor mensual Niñera" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesHogarCount">¿Tienes algún gasto adicional para hogar? Descríbelo:</label>
            <select id="gastosAdicionalesHogarCount" name="gastosAdicionalesHogarCount"></select>
            <div id="gastosAdicionalesHogarContainer"></div>
  
            <h3>Salidas de Entretenimiento</h3>
            <p>Especifica los gastos que tienes cada mes en salidas y actividades de entretenimiento, como restaurantes, viajes pequeños (por ejemplo escapadas de fin de semana, los viajes más grandes te los solicitaremos más adelante), fiestas, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="salidasEntretenimiento" placeholder="Valor mensual Salidas de Entretenimiento" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="restaurantes" placeholder="Valor mensual Restaurantes" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="viajesPequenos" placeholder="Valor mensual Viajes pequeños (ej, escapada fin de semana)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="fiestas" placeholder="Valor mensual Fiestas" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesEntretenimientoCount">¿Tienes algún gasto adicional para entretenimiento? Descríbelo:</label>
            <select id="gastosAdicionalesEntretenimientoCount" name="gastosAdicionalesEntretenimientoCount"></select>
            <div id="gastosAdicionalesEntretenimientoContainer"></div>
  
            <h3>Protecciones Personales</h3>
            <p>Detalla los gastos mensuales en seguros y aportes de protección personal, como seguro de vida, medicina prepagada, seguro de mascotas, etc (No incluyas los pagos que realizas una vez al año como SOAT, te serán solicitados en la siguiente sección).</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="seguroTodoRiesgoVehiculo" placeholder="Valor mensual Seguro Todo Riesgo Vehículo" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="medicinaPrepagada" placeholder="Valor mensual Medicina Prepagada" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="seguroVida" placeholder="Valor mensual Seguro de Vida" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroExequial" placeholder="Valor mensual Seguro Exequial" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="seguroMascotas" placeholder="Valor mensual Seguro de Mascotas" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesProteccionesPersonalesCount">¿Tienes algún gasto adicional de protecciones personales? Descríbelo:</label>
            <select id="gastosAdicionalesProteccionesPersonalesCount" name="gastosAdicionalesProteccionesPersonalesCount"></select>
            <div id="gastosAdicionalesProteccionesPersonalesContainer"></div>
  
            <h3>Descuentos de Nómina</h3>
            <p>Especifica los gastos relacionados con retenciones y aportes, como retención en la fuente, salud, pensión, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="retencionFuente" placeholder="Valor mensual Retención en la Fuente" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="salud" placeholder="Valor mensual Salud" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="pension" placeholder="Valor mensual Pensión" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="arl" placeholder="Valor mensual ARL" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="aporteFondoSolidaridad" placeholder="Valor mensual Aporte a Fondo de Solidaridad" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="aporteFondoSubsistencia" placeholder="Valor mensual Aporte a Fondo de Subsistencia" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesRetencionAportesCount">¿Tienes algún gasto adicional relacionado con tu nómina? Descríbelo:</label>
            <select id="gastosAdicionalesRetencionAportesCount" name="gastosAdicionalesRetencionAportesCount"></select>
            <div id="gastosAdicionalesRetencionAportesContainer"></div>
  
            <h3>Educación Personal o Gastos de Hijos</h3>
            <p>Detalla los gastos mensuales relacionados con tu educación personal o la de tus hijos, como cursos, colegio, etc (en el caso de pagos semestrales o anuales, te los preguntaremos más adelante). Si pagas tu Medicina Prepagada / Seguro de forma anual, no los incluyas aquí.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="cursosIdiomas" placeholder="Valor mensual Cursos de Idiomas (Personal)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="cursosMensuales" placeholder="Valor mensual Cursos Mensuales (Ejemplo: Platzi)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="colegioHijos" placeholder="Valor mensual Pensión Colegio Hijos " className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="ruta" placeholder="Valor mensual Ruta" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="alimentacion" placeholder="Valor mensual Alimentación" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="mesadaHijos" placeholder="Valor mensual Mesada Hijo(s)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="ropaHijos" placeholder="Valor mensual Ropa Hijo(s)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="panales" placeholder="Valor mensual Pañales" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="transporteHijos" placeholder="Valor mensual Transporte Hijo(s)" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesEducacionHijosCount">¿Tienes algún gasto adicional? Descríbelo:</label>
            <select id="gastosAdicionalesEducacionHijosCount" name="gastosAdicionalesEducacionHijosCount"></select>
            <div id="gastosAdicionalesEducacionHijosContainer"></div>
  
            <h3>Gastos Financieros</h3>
            <p>Especifica los gastos financieros que tienes cada mes, como el mantenimiento de tarjetas de crédito y débito.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="mantenimientoTarjetaCredito1" placeholder="Valor mensual Mantenimiento Tarjeta de Crédito 1" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="mantenimientoTarjetaCredito2" placeholder="Valor mensual Mantenimiento Tarjeta de Crédito 2" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="cuotaManejoTarjetaDebito" placeholder="Valor mensual Cuota de Manejo Tarjeta Débito" className="formatted-number"/>
              </div>
            </div>
            <label for="gastosAdicionalesFinancierosCount">¿Tienes algún gasto adicional? Descríbelo:</label>
            <select id="gastosAdicionalesFinancierosCount" name="gastosAdicionalesFinancierosCount"></select>
            <div id="gastosAdicionalesFinancierosContainer"></div>
  
            <h3>Otros Gastos</h3>
            <p>Especifica cualquier otro gasto mensual que no hayas incluido en las secciones anteriores, como ayuda familiar, donaciones, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="ayudaFamiliar" placeholder="Valor mensual Ayuda a un Familiar" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="donaciones" placeholder="Valor mensual Donaciones / Diezmo" className="formatted-number"/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input type="text" name="arriendoConsultorio" placeholder="Valor mensual Ayuda a un Familiar" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="serviciosPublicosConsultorio" placeholder="Valor mensual Servicios públicos Consultorio / Oficina " className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="pagoAdministracionAdicional" placeholder="Valor mensual Pago de Administración Adicional" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroAmbulanciaFamiliar" placeholder="Valor mensual Seguro Ambulancia Familiar" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="regalosCumpleanosOficina" placeholder="Valor mensual Regalos Cumpleaños u Oficina" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroSaludFamiliar" placeholder="Valor mensual Seguro Salud Familiar" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="secretariaAsistente" placeholder="Valor mensual Secretaria / Asistente Personal" className="formatted-number"/>
              </div>
            </div>

            <label for="gastosAdicionalesOtrosCount">¿Tienes algún gasto adicional? Descríbelo:</label>
            <select id="gastosAdicionalesOtrosCount" name="gastosAdicionalesOtrosCount"></select>
            <div id="gastosAdicionalesOtrosContainer"></div>
  
            <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
            <input type="button" name="next" className="next action-button" value="Siguiente"/>
          </fieldset>
  
     {/* Gastos Anuales  */}
          <fieldset>
            <h2 className="fs-title">Gastos Anuales</h2>
            <p>Incluye información sobre tus gastos anuales.</p>
            <p>En esta sección, detalla los gastos que tienes una vez al año, como impuestos, seguros, revisiones tecnomecánicas, etc.</p>
            <h3>Seguros</h3>
            <p>Especifica los seguros que pagas anualmente, como SOAT, seguros de vida, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="soat1" placeholder="Valor anual SOAT 1" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="soat2" placeholder="Valor anual SOAT 2" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="todoRiesgo1" placeholder="Valor anual Todo Riesgo 1" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="todoRiesgo2" placeholder="Valor anual Todo Riesgo 2" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="polizaSalud" placeholder="Valor anual Póliza de Salud" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroVivienda" placeholder="Valor anual Seguro de Vivienda" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="seguroExequial" placeholder="Valor anual Seguro Exequial" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="seguroResponsabilidadCivil" placeholder="Valor anual Póliza de Responsabilidad Civil" className="formatted-number"/>
              </div>
            </div>
            <label for="segurosAdicionalesCount">¿Tienes algún seguro adicional? Descríbelo:</label>
            <select id="segurosAdicionalesCount" name="segurosAdicionalesCount"></select>
            <div id="segurosAdicionalesContainer"></div>

            <h3>Anualidades Fijas</h3>
            <p>Especifica los gastos anuales fijos, como gimnasio, contadores, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="contador" placeholder="Valor anual Contador / Realización Declaración de Renta" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="pagoGimnasio" placeholder="Valor anual Pago Gimnasio / Entrenador" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="anualidades" placeholder="Valor anual Pago Anualidades (sociedades, cursos)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="matriculaColegio" placeholder="Valor anual Matrícula Colegio" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="semestreUniversidad" placeholder="Valor total año Universidad" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="liquidacionEmpleada" placeholder="Valor anual Liquidación Empleada / Prima" className="formatted-number"/>
              </div>
            </div>
            <label for="anualidadesFijasAdicionalCount">¿Tienes algún gasto fijo adicional? Descríbelo:</label>
            <select id="anualidadesFijasAdicionalCount" name="anualidadesFijasAdicionalCount"></select>
            <div id="anualidadesFijasAdicionalContainer"></div>

            <h3>Anualidades Presupuestadas</h3>
            <p>Especifica los gastos anuales presupuestados, como vacaciones, regalos, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="vacacionesGrandes" placeholder="Valor anual Vacaciones Internacionales" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="vacacionesPequenas" placeholder="Valor anual Vacaciones Nacionales" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="regalosDiciembre" placeholder="Valor anual Regalos y Compras de Diciembre" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="regalosEspeciales" placeholder="Valor anual Regalos Especiales (esposa, papás, hermanos, hijos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="ropaAnual" placeholder="Valor anual Ropa (compra semestral o anual)" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="mantenimientoApto" placeholder="Valor anual Mantenimiento Apartamento" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="mantenimientoVehiculo" placeholder="Valor anual Mantenimiento Vehículo" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="comprasAnuales" placeholder="Valor anual Compras Anuales (perfumes)" className="formatted-number"/>
              </div>
            </div>
            <label for="anualidadesPresupuestadasAdicionalCount">¿Tienes algún gasto presupuestado adicional? Descríbelo:</label>
            <select id="anualidadesPresupuestadasAdicionalCount" name="anualidadesPresupuestadasAdicionalCount"></select>
            <div id="anualidadesPresupuestadasAdicionalContainer"></div>

            <h3>Impuestos</h3>
            <p>Detalla los impuestos que pagas anualmente, como declaración de renta, impuesto vehicular, etc.</p>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="declaracionRenta" placeholder="Valor anual Declaración de Renta" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="impuestoVehicular1" placeholder="Valor anual Impuesto Vehicular 1" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="impuestoVehicular2" placeholder="Valor anual Impuesto Vehicular 2" className="formatted-number"/>
              </div>
              <div className="col-md-6">
                <input type="text" name="impuestoPredial1" placeholder="Valor anual Impuesto Predial 1" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <input type="text" name="impuestoPredial2" placeholder="Valor anual Impuesto Predial 2" className="formatted-number"/>
              </div>
            </div>
            <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
            <input type="button" name="next" className="next action-button" value="Siguiente"/>
          </fieldset>
          
          {/* {-- Patrimonio -} */}
          <fieldset>
            <h2 className="fs-title">Patrimonio</h2>
            <p>Incluye información sobre tus bienes y activos.</p>
            <p>En esta sección, te pediremos que detalles todos los bienes y activos que posees, tanto líquidos como productivos e improductivos.</p>
            
            <h3>Activos Líquidos</h3>
            <p>Proporcione detalles sobre sus activos líquidos. Los activos líquidos son aquellos que se pueden convertir fácilmente en efectivo, como cuentas de ahorros y dinero en efectivo.</p>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cuentaAhorros1" value="Cuenta de Ahorros 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCuentaAhorros1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCuentaAhorros1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cuentaAhorros2" value="Cuenta de Ahorros 2" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCuentaAhorros2" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCuentaAhorros2" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cuentaAhorros3" value="Cuenta de Ahorros 3" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCuentaAhorros3" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCuentaAhorros3" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="ahorrosEfectivoPesos" value="Ahorros en Efectivo (Pesos)" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAhorrosEfectivoPesos" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAhorrosEfectivoPesos" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="ahorrosEfectivoDolares" value="Ahorros en Efectivo (Dólares)" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAhorrosEfectivoDolares" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAhorrosEfectivoDolares" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="ahorrosEfectivoEuros" value="Ahorros en Efectivo (Euros)" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAhorrosEfectivoEuros" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAhorrosEfectivoEuros" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <label for="activosLiquidosAdicionalCount">¿Tienes algún activo líquido adicional? Descríbelo:</label>
            <select id="activosLiquidosAdicionalCount" name="activosLiquidosAdicionalCount"></select>
            <div id="activosLiquidosAdicionalContainer"></div>
        
            <h3>Activos Productivos</h3>
            <p>Proporcione detalles sobre sus activos productivos. Los activos productivos son aquellos que generan ingresos o aumentan de valor con el tiempo. Ejemplos incluyen pensiones, cesantías, cuentas AFC, fondos de inversión colectiva (FIC), acciones, criptomonedas, apartamentos en arriendo, certificados de depósito a término (CDT) e inversiones en dólares.</p>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="pensionObligatoria" value="Pensión Obligatoria" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadPensionObligatoria" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorPensionObligatoria" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cesantias" value="Cesantías" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCesantias" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCesantias" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cuentaAFC" value="Cuenta AFC" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCuentaAFC" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCuentaAFC" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="fic" value="FIC (Fondo de Inversión Colectiva)" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadFic" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorFic" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="acciones" value="Acciones" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAcciones" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAcciones" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="criptomonedas" value="Criptomonedas" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCriptomonedas" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCriptomonedas" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="aptoArriendo1" value="Apartamento en Arriendo 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAptoArriendo1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAptoArriendo1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="aptoArriendo2" value="Apartamento en Arriendo 2" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAptoArriendo2" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAptoArriendo2" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cdt1" value="CDT 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCdt1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCdt1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="cdt2" value="CDT 2" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadCdt2" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorCdt2" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="inversionDolares" value="Inversión en Dólares" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadInversionDolares" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorInversionDolares" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <label for="activosProductivosAdicionalCount">¿Tienes algún activo productivo adicional? Descríbelo:</label>
            <select id="activosProductivosAdicionalCount" name="activosProductivosAdicionalCount"></select>
            <div id="activosProductivosAdicionalContainer"></div>
        
            <h3>Activos Improductivos</h3>
            <p>Proporcione detalles sobre sus activos improductivos. Los activos improductivos son aquellos que no generan ingresos y pueden tener costos de mantenimiento. Ejemplos incluyen apartamentos que no están en arriendo y vehículos personales.</p>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="aptoVivienda1" value="Apartamento Vivienda 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAptoVivienda1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAptoVivienda1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="aptoNoProductivo" value="Apartamento No Productivo" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadAptoNoProductivo" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorAptoNoProductivo" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="vehiculo1" value="Vehículo 1" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadVehiculo1" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorVehiculo1" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <input type="text" name="vehiculo2" value="Vehículo 2" readonly/>
              </div>
              <div className="col-md-4">
                <input type="text" name="entidadVehiculo2" placeholder="Entidad / Propietario"/>
              </div>
              <div className="col-md-4">
                <input type="text" name="valorVehiculo2" placeholder="Valor (en pesos)" className="formatted-number"/>
              </div>
            </div>
            <label for="activosImproductivosAdicionalCount">¿Tienes algún activo improductivo adicional? Descríbelo:</label>
            <select id="activosImproductivosAdicionalCount" name="activosImproductivosAdicionalCount"></select>
            <div id="activosImproductivosAdicionalContainer"></div>
        
            <h3>Deudas de Corto Plazo</h3>
            <p>Detalla los pasivos de corto plazo que tienes (de 0 a 5 años), como tarjetas de crédito y deudas familiares.</p>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="tarjetaCredito1" value="Tarjeta de Crédito 1" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoTarjetaCredito1" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadTarjetaCredito1" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaTarjetaCredito1" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasTarjetaCredito1" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualTarjetaCredito1" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="tarjetaCredito2" value="Tarjeta de Crédito 2" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoTarjetaCredito2" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadTarjetaCredito2" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaTarjetaCredito2" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasTarjetaCredito2" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualTarjetaCredito2" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="deudaFamiliar" value="Deuda Familiar" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoDeudaFamiliar" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadDeudaFamiliar" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaDeudaFamiliar" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasDeudaFamiliar" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualDeudaFamiliar" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="libreDestino1" value="Libre Destino 1" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoLibreDestino1" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadLibreDestino1" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaLibreDestino1" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasLibreDestino1" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualLibreDestino1" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="libreDestino2" value="Libre Destino 2" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoLibreDestino2" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadLibreDestino2" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaLibreDestino2" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasLibreDestino2" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualLibreDestino2" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="deudaFondoEmpleados" value="Deuda Fondo de Empleados" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoDeudaFondoEmpleados" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadDeudaFondoEmpleados" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaDeudaFondoEmpleados" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasDeudaFondoEmpleados" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualDeudaFondoEmpleados" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="creditoVehicular" value="Crédito Vehicular" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoCreditoVehicular" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadCreditoVehicular" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaCreditoVehicular" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasCreditoVehicular" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualCreditoVehicular" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="creditoRotativo" value="Crédito Rotativo" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoCreditoRotativo" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadCreditoRotativo" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaCreditoRotativo" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasCreditoRotativo" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualCreditoRotativo" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <label for="deudasCortoPlazoAdicionalCount">¿Tienes algún pasivo de corto plazo adicional? Descríbelo:</label>
            <select id="deudasCortoPlazoAdicionalCount" name="pasivosCortoPlazoAdicionalCount"></select>
            <div id="deudasCortoPlazoAdicionalContainer"></div>
        
            <h3>Pasivos de Largo Plazo</h3>
            <p>Detalla los pasivos de largo plazo que tienes (de 5 años en adelante), como créditos hipotecarios y leasings.
            </p>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="creditoHipotecario1" value="Crédito Hipotecario 1" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoCreditoHipotecario1" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadCreditoHipotecario1" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaCreditoHipotecario1" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasCreditoHipotecario1" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualCreditoHipotecario1" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="creditoHipotecario2" value="Crédito Hipotecario 2" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoCreditoHipotecario2" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadCreditoHipotecario2" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaCreditoHipotecario2" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasCreditoHipotecario2" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualCreditoHipotecario2" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="leasing1" value="Leasing 1" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoLeasing1" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadLeasing1" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaLeasing1" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasLeasing1" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualLeasing1" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2">
                <input type="text" name="leasing2" value="Leasing 2" readonly/>
              </div>
              <div className="col-md-2">
                <input type="text" name="saldoLeasing2" placeholder="Saldo de Capital" className="formatted-number"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="entidadLeasing2" placeholder="Entidad"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="tasaLeasing2" placeholder="Tasa Efectiva Anual"/>
              </div>
              <div className="col-md-2">
                <input type="number" name="cuotasLeasing2" placeholder="Número de Cuotas Pendientes"/>
              </div>
              <div className="col-md-2">
                <input type="text" name="valorMensualLeasing2" placeholder="Cuota mensual" className="formatted-number"/>
              </div>
            </div>
            <label for="deudasLargoPlazoAdicionalCount">¿Tienes algún pasivo de largo plazo adicional? Descríbelo:</label>
            <select id="deudasLargoPlazoAdicionalCount" name="deudasLargoPlazoAdicionalCount"></select>
            <div id="deudasLargoPlazoAdicionalContainer"></div>          
            
            <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
            <input type="button" name="next" className="next action-button" value="Siguiente"/>
          </fieldset>
  
          {/* {-- Objetivos Financieros -} */}
          <fieldset>
            <h2 className="fs-title">Objetivos Financieros</h2>
            <p>Incluye información sobre tus objetivos financieros.</p>
            <p><strong>Descripción:</strong> En esta sección, te pediremos que detalles tus objetivos financieros, tanto a corto como a largo plazo. Esto nos ayudará a entender mejor tus metas y a planificar cómo alcanzarlas.</p>
            
            {/* {-- Campo fijo para Libertad Financiera -} */}
            <h3>Libertad Financiera</h3>
            <p>Para el objetivo de "Libertad Financiera", escribe el número de años en los que esperas ser libre financieramente, cuánto deseas recibir mensualmente por ingresos pasivos y en cuánto tiempo?. 
            </p>
            <div className="row">
              <div className="col-md-3">
                <label for="libertadPlazo">Plazo en años:</label>
                <input type="text" id="libertadPlazo" name="libertadPlazo" placeholder="Plazo en años" className="formatted-number"/>
              </div>
              <div className="col-md-3">
                <label for="libertadValor">Valor objetivo:</label>
                <input type="text" id="libertadValor" name="libertadValor" placeholder="Valor objetivo" className="formatted-number"/>
              </div>
            </div>

            <h3>Objetivos Fijos Adicionales</h3>
            <div id="objetivosContainer">
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoSalirDeDeudas" value="Salir de deudas" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionSalirDeDeudas" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoSalirDeDeudas" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorSalirDeDeudas" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoComprarVivienda" value="Comprar vivienda" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionComprarVivienda" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoComprarVivienda" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorComprarVivienda" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoViajar" value="Viajar" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionViajar" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoViajar" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorViajar" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoUniversidadHijos" value="Universidad hijos" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionUniversidadHijos" placeholder="Descripción (edad hijos)"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoUniversidadHijos" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorUniversidadHijos" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoInvertir" value="Invertir" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionInvertir" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoInvertir" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorInvertir" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoPlaneacionTributaria" value="Planeación tributaria" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionPlaneacionTributaria" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoPlaneacionTributaria" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorPlaneacionTributaria" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoInvertirDolares" value="Invertir en dólares u otra moneda" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionInvertirDolares" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoInvertirDolares" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorInvertirDolares" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoSegurosVida" value="Contar con seguros de vida / incapacidad" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionSegurosVida" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoSegurosVida" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorSegurosVida" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoCompraVehiculo" value="Cambio / Compra de vehículo" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionCompraVehiculo" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoCompraVehiculo" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorCompraVehiculo" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoCasaPropia" value="Tener casa propia vs Vivir en arriendo" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionCasaPropia" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoCasaPropia" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorCasaPropia" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <input type="text" name="objetivoMaestria" value="Maestría / Especialización / Estudios" readonly/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="descripcionMaestria" placeholder="Descripción"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="plazoMaestria" placeholder="Plazo en años" className="formatted-number"/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" name="valorMaestria" placeholder="Valor Objetivo" className="formatted-number"/>
                    </div>
                </div>
            </div>
            <input type="button" name="previous" className="previous action-button-previous" value="Anterior"/>
            <input type="submit" name="submit" className="submit action-button" value="Enviar"/>
          </fieldset>

        </div>
      </div>
    </div>
  </div>)

}


export default Form;
