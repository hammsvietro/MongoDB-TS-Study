import { Router } from 'express';

import userController from './controllers/UserController';
import sessionController from './controllers/SessionController';


const routes = Router();

routes.get('/', (req, res) => {
    res.json({hello: 'world'});
});

routes.post('/user', userController.store);
routes.get('/user', userController.show);

routes.post('/login', sessionController.login);

export default routes;