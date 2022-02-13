const mongoose=require('mongoose');
const {Schema}=mongoose;

const projectSchema=new Schema({
    thumbnailUrl:{
        type:String,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    date:{
        type:String,
    }
})

module.exports=mongoose.model('Project',projectSchema);