import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.send('hello world!');
});

// routes.post('/users', )

export default routes;