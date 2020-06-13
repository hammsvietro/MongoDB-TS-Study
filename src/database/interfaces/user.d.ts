import { Document } from 'mongoose';

export interface IUser extends Document {
    
    // attribs:
    username: string;
    email:string;
    password: string;

    // methods:
    printData(): void;
}