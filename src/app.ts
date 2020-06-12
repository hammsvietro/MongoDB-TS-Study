import express from 'express';

import DBConnection  from './database/config';
import routes from './routes';

interface IApp {
    express: express.Application;
}

class App implements IApp{
    
    express: express.Application;

    constructor() {
       this.express = express();
       this.database();
        this.routes();
    }

    database() {
        DBConnection.on('error', console.error.bind(console, 'connection error:'));
        DBConnection.once('open', () => {
            console.log('connected to Database: ' + DBConnection.name);
        });
    }

    routes() {
        this.express.use(routes);
    }

}

export default new App().express;