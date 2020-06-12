import mongoose from 'mongoose';

import { IUser } from '../interfaces/user';

const userSchema = new mongoose.Schema<IUser>({
    username: String,
    email: String,
    password: String,
});

userSchema.methods.printName = function() {
    console.log(this.username);
}

userSchema.methods.changePassword = function(oldPassword: string, newPassword: string, newPasswordConfirm: string) {
    
}