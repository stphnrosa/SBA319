import express from 'express';
import * as matchaController from '../../controllers/matcha/matcha-controllers.js';

const router = express.router();

///////////////////////////
// Routes/API Endpoints ///
//////////////////////////


//seed route///

router.get('/seed', matchaController.seedMatcha)

//index
router.get('/', matchaController.getMatcha)

//CREATE
router.post('/', matchaController.createMatcha)