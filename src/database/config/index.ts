import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

export default connection;
