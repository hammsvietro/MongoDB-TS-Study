import { Document } from 'mongoose';

export interface IUser extends Document {
    
    // attribs:
    username: string;
    email:string;
    password: string;

    // methods:
    printName(): void;
    changePassword(oldPassword: string, newPassword: string, newPasswordConfirm: string): void;
}