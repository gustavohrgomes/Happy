import { Router } from 'express';
import OrphanageController from './src/controllers/OrphanagesController';

const routes = Router()

routes.post('/orphanages', OrphanageController.create);

export default routes;