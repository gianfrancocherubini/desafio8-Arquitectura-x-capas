import { Router } from 'express';
import passport from 'passport';
import { RegistroController, auth2 } from '../controller/registro.controller.js';

export const router=Router()


router.get('/', auth2, RegistroController.registroRender);
router.get('/errorRegistro',RegistroController.registroError)
router.post('/', passport.authenticate('registro', {failureRedirect: '/api/registro/errorRegistro'}), RegistroController.registro);
