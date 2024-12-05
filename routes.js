const express = require('express');
//llamar a handlers del api
const pacienteHandler = require('./app/handlers/paciente.handler');
const doctorHandler = require('./app/handlers/doctor.handler');
const citaHandler = require('./app/handlers/cita.handler');
const historialPacienteHandler = require('./app/handlers/historialPaciente.handler');
const recetaMedicaHandler = require('./app/handlers/recetaMedica.handler');
//variable para encapsular rutas
const router = express.Router();
//reguistrar las rutas 
//rutas de paciente
router.get('/pacientes', pacienteHandler.listPaciente) //listado de pacientes SIN PARENTESISAL FINAL listPAciente
router.post('/pacientes', pacienteHandler.insertPaciente) // insertamos pacientes
router.patch('/pacientes/:id', pacienteHandler.updatePaciente) // actualizar pacientes
router.delete('/pacientes/:id', pacienteHandler.deletePaciente) // eliminar pacientesS
//rutas de doctor
router.get('/doctores', doctorHandler.listDoctor)
router.post('/doctores', doctorHandler.insertDoctor)
router.patch('/doctores/:id', doctorHandler.updateDoctor)
router.delete('/doctores:/id', doctorHandler.deleteDoctor)
//rutas de cita
router.get('/citas', citaHandler.listCita)
router.post('/citas', citaHandler.insertCita)
router.patch('/citas/:id', citaHandler.updateCita)
router.delete('/citas:/id', citaHandler.deleteCita)
//rutas de historial paciente
router.get('/historialPacientes', historialPacienteHandler.listHistorialPaciente)
router.post('/historialPacientes', historialPacienteHandler.insertHistorialPaciente)
router.patch('/historialPacientes/:id', historialPacienteHandler.updateHistorialPaciente)
router.delete('/historialPacientes:/id', historialPacienteHandler.deleteHistorialPaciente)
//rutas de receta medica
router.get('/recetaMedica', recetaMedicaHandler.listRecetaMedica)
router.post('/recetaMedica', recetaMedicaHandler.insertRecetaMedica)
router.patch('/recetaMedica/:id', recetaMedicaHandler.updateRecetaMedica)
router.delete('/recetaMedica:/id', recetaMedicaHandler.deleteRecetaMedica)
//exporto los router (INCLUIDO EL 25 DE JUNIO para que funcione por el terminal NODE INDEX.JS)
module.exports = router;