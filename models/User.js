const mongoose = require('mongoose');
const { Schema } = mongoose;
    // same as below
    // const Schema = mongoose.Schema;

const userSchema = new Schema({
<<<<<<< HEAD
    googleId: String,
    credits: { type: Number, default: 0}
=======
    googleId: String
>>>>>>> 1e13def6c1ee267979650973756dc609982c3d72
});

mongoose.model('users', userSchema);