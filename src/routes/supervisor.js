import express from 'express';
import {crearSupervisor, 
    updateSupervisor, 
    getSupervisorById, 
    deleteSupervisor, 
    loginSupervisor, 
    crearSupervisado,
    borrarSupervisado,
    updateSupervisado,
    consultarSupervisados

} from '../controllers/supervisor.controller.js';


const router = express.Router();

//CRUD del supervisor
router.post('/registro', crearSupervisor);

//Con login
router.put('/actualizar/:id', updateSupervisor);
router.get('/:id', getSupervisorById);

//login
router.post('/login', loginSupervisor)

//Crear Supervisados
router.post('/supervisado/registrado/:id', crearSupervisado);
router.post('/supervisado/borrar/:id/:idSupervisado', borrarSupervisado);
router.post('/supervisado/actualizar/:id/:idSupervisado', updateSupervisado);

//Consultar Supervisados
router.get('/supervisado/:id', consultarSupervisados);

export const path = '/supervisor';
export default router;