import { Document } from 'mongoose';

export interface IUser extends Document {
    
    // attribs:
    username: string;
    email:string;
    password: string;

    tweets: {
        tweet: string;
        date: Date;
    }[]; 

    // methods:
    getTweets(): void;
}

