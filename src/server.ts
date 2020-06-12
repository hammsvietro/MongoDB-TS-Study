import mongoose from 'mongoose';

import app from './app';


// interface Kitty extends mongoose.Document {
//     name: string;
//     speak(): void;
// }

// const kittySchema = new mongoose.Schema<Kitty>({
//     name: String,
// });

// kittySchema.methods.speak =  function() {
//     const greeting = this.name ? "my name is " + this.name : "I don't have a name :(";
//     console.log(greeting);
// };

// const Kitten = mongoose.model<Kitty>('Kitten', kittySchema);


// Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     console.log(kittens);
//   })

app.listen(3333);