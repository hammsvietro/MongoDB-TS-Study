import { Router } from 'express';

import userController from './controllers/UserController';
import sessionController from './controllers/SessionController';
import dashboardController from './controllers/DashboardController';

import checkId from './middlewares/CheckId';
import resolveToken from './middlewares/ResolveToken';


const routes = Router();

routes.get('/', (req, res) => {
    res.json({hello: 'world'});
});

routes.post('/user', userController.store);
routes.get('/user', userController.show);

routes.post('/login', sessionController.login);

routes.post('/tweet/:id', resolveToken, checkId, dashboardController.tweet);
routes.get('/tweet/:id', dashboardController.userTweets);
routes.get('/tweet', dashboardController.allTweets);


export default routes;