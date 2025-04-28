import express from 'express';
import * as matchaController from '../../controllers/matcha/matcha-controllers.js';

const router = express.Router();

///////////////////////////
// Routes/API Endpoints ///
//////////////////////////


//seed route

router.get('/seed', matchaController.seedMatcha)

//index
router.get('/', matchaController.getMatcha)

//CREATE
router.post('/', matchaController.createMatcha)

//DELETE
router.delete('/:id', matchaController.deleteMatcha)

export default router; //referencing line 4