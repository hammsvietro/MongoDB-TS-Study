import express from 'express';
import bcrypt from 'bcryptjs'

import User from '../database/models/UserModels';


class UserController {

    async show(req: express.Request, res: express.Response) {
        const users = await User.find((err, users) => {
            if (err) return console.error(err);

            return users;
        });

        console.log(users);
        
        
        res.status(200).send(users);
    };

    async store(req: express.Request, res: express.Response) {

        

        const { username, email, password } = req.body;
        
        const encryptedPass = await bcrypt.hash(password, 8);


        const user = new User({ username, email, password: encryptedPass });

        user.save();

        let userResponse = user.toJSON();
        userResponse.password = undefined; 

        return res.status(200).json(userResponse);
    }

}

export default new UserController();