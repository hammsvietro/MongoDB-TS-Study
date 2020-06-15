import express from 'express';

import User from '../database/models/UserModels';

class DashboardController {

    async userTweets(req: express.Request, res: express.Response) {
        const { id } = req.params;

        const query = await User.findOne({ _id: id }).sort('tweets.date').exec((err, user) => {
            
            if(!user) return res.status(404).json({error: 'user not found'});

            if(err) return res.status(403).json({error: err});

            res.status(200).json(user.getTweets());
            
        })      

    }

    async tweet(req: express.Request, res: express.Response) {
        const { id } = req.params;

        const { tweet } = req.body;

        const user = await User.findOne({ _id: id });

        if(!user) return res.status(404).json({ error: 'user not found' });

        user.tweets.push({ tweet, date: new Date() });

        user.save();

        return res.status(200).json({ success: 'tweet posted' });
    }


    async allTweets(req: express.Request, res: express.Response) {
        const users = await User.find().select('tweets username -_id');

        console.log(users);
        

        return res.status(200).send(users);

    }

}

export default new DashboardController();