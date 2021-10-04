const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
    fullName:{
        type:String,
        // required:true
    },
    email: {
        type: String,
        lowercase:true,
        // required:true
    },
    password:{
        type:String,
        // required:true
    },
    Cpassword:{
        type:String,
        // required:true
    },
    securityAnswer:{
        type:String,
        // required:true
    },
    data1:{
        type:Array,
        // required:true
    },
    data2:{
        type:Array,
        // required:true
    }

},{
    timestamps:true
})

const User = mongoose.model('User',UserSchema)

module.exports=User