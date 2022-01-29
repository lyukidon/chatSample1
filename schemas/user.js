const mongoose=require('mongoose');

const {Schema}=mongoose;
const userSchema=new Schema({
	userId:{
		type:String
	}
})

module.exports=mongoose.model('User',userSchema);
