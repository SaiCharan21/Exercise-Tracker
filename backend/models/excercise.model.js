const mongoose = require('mongoose')

const Schema = mongoose.Schema

const excerciseSchema = new Schema({
    username:{type:String , required:true},
    description:{type:String, },
    duration:{type:Number , required:true},
    date:{type:Date,required:true },
},{
    timestamps:true,
})

const Excercise = mongoose.model('Excercise',excerciseSchema)

module.exports=Excercise;