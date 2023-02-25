const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    fatherName:{
        type: String,
        required: true,
    },
    motherName:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo:{type:String}
},{
    versionKey:false,
    timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
