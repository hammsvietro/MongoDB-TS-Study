import express from 'express';

import User from '../database/models/UserModels';
import generateToken from '../util/GenerateToken'
import comparePasswords from '../util/ComparePasswords';

class SessionController {

    async login(req: express.Request, res: express.Response) {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email });

        if(!user) return res.status(404).json({ 'not found': 'invalid email/password' });

        if(!await comparePasswords(user.password, password)) return res.status(404).json({ 'not found': 'invalid email/password' });

        const token = generateToken({ id: user.id });

        const {password: pass, ...responseUser} = user.toJSON();
        return res.status(200).json({
            user: responseUser,
            token
        });
    }
}

export default new SessionController();