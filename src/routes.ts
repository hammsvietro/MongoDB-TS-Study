import { Router } from 'express';

import userController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
    res.json({hello: 'world'});
});

routes.post('/user', userController.store);
routes.get('/user', userController.show);

export default routes;