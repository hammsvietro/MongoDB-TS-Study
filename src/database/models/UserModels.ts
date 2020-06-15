import mongoose from 'mongoose';

import { IUser } from '../interfaces/user';

const userSchema = new mongoose.Schema<IUser>({
    username: String,
    email: String,
    password: String,
    tweets: [{
        tweet: String,
        date: Date
    }]
});


userSchema.methods.getTweets = function() {
    const tweets = this.tweets.map((tweet) => {
        return {
            tweet: tweet.tweet,
            date: tweet.date
        }
    });
    

    return tweets;
}

const User = mongoose.model<IUser>('User', userSchema);


export default User;