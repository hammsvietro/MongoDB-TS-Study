import mongoose from 'mongoose';

import { IUser } from '../interfaces/user';

const userSchema = new mongoose.Schema<IUser>({
    username: String,
    email: String,
    password: String,
});

userSchema.methods.printData = function() {
    console.log(this.username);    
    console.log(this.email);    
    console.log(this.password);    
}


const User = mongoose.model<IUser>('User', userSchema);


export default User;