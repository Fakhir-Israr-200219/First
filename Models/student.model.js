const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"]
    },
    rollNumber:{
        type:String,
        required:[true,"roll number is required"],
        unique:[true,"roll number alredy exist"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"email alredy exist"]
    },
    phone:{
        type:String,
        required:[true,"phone number is required"]
    }
},{
    timestamps : true
})

module.exports = mongoose.model("First",StudentSchema);