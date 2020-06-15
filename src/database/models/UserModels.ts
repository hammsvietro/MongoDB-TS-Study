import mongoose from 'mongoose';

import { IUser } from '../interfaces/user';

const userSchema = new mongoose.Schema<IUser>({
    username: String,
    email: String,
    password: String,
    tweets: [String]
});


userSchema.methods.latestTweet = function() {
    return this.tweets[this.tweets.length - 1];
}

const User = mongoose.model<IUser>('User', userSchema);


export default User;