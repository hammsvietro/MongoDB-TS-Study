import express from 'express';

import User from '../database/models/UserModels';

class DashboardController {

    async latestUserTweet(req: express.Request, res: express.Response) {
        const { id } = req.params;

        await User.findOne({ _id: id }).exec((err, user) => {
            if(!user) return res.status(404).json({error: 'user not found'});

            if(err) return res.status(403).json({error: err});

            res.status(200).json({tweet: user.latestTweet()});
            
        })      

    }

    async tweet(req: express.Request, res: express.Response) {
        const { id } = req.params;

        const { tweet } = req.body;

        const user = await User.findOne({ _id: id });

        if(!user) return res.status(404).json({ error: 'user not found' });

        user.tweets.push(tweet);

        user.save();

        return res.status(200).json({ success: 'tweet posted' });
    }


    async allTweets(req: express.Request, res: express.Response) {
        const tweets = await User.find().select('tweets -_id');

        

        return res.status(200).json(tweets);

    }

}

export default new DashboardController();