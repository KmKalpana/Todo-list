const mongoose=require('mongoose');

const TodoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true,
        trim:true,
    },
    description:{
        type:String,
    }
},{
    timestamps:true
})

const Todo=mongoose.model("Todo",TodoSchema);

module.exports=Todo;