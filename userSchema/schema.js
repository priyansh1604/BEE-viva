const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    age:{
        type : Number,
        required: true
    },
    availability:{
        type :Boolean,
        required:true
    },
    price:{
        type : Number,
        required: true
    }

})

module.exports=mongoose.model("UserSchema",userSchema);