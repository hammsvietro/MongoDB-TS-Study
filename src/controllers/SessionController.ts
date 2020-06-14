import express from 'express';

import { IUser } from '../database/interfaces/user';
import generateToken from '../util/GenerateToken'

class SessionController {

    async login(req: express.Request, res: express.Response) {

    }
}


export default new SessionController();