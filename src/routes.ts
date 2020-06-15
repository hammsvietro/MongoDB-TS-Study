import { Router } from 'express';

import userController from './controllers/UserController';
import sessionController from './controllers/SessionController';
import dashboardController from './controllers/DashboardController';


const routes = Router();

routes.get('/', (req, res) => {
    res.json({hello: 'world'});
});

routes.post('/user', userController.store);
routes.get('/user', userController.show);

routes.post('/login', sessionController.login);

routes.post('/tweet/:id', dashboardController.tweet);
routes.get('/tweet/:id', dashboardController.latestUserTweet);
routes.get('/tweet', dashboardController.allTweets);


export default routes;