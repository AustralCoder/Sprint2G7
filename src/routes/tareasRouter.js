
import { Router } from 'express';
import {
    homeTareas,
    dameTareas,
    agregarTareas,
    eliminarTarea,
    tareasId,
    // editarTarea,
    
} from '../controllers/tareasControler.js'


export const router = Router();

router.get('/', homeTareas);
router.get('/tareas', dameTareas);
router.post('/addTareas', agregarTareas);
router.delete('/eliminar/:id', eliminarTarea); 
router.get('/tareas/:id', tareasId);
// router.put('/editar/:id', editarTarea);



