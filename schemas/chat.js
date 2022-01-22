const mongoose=require('mongoose');

const {Schema}=mongoose;
const chatSchema = new Schema({
	id:{
		type:Number,
		required:true,
		unique:true,
		default:Date.now()
	},
	time:{
		type: String,
		required:true
	},
	chatContent:{
		type:String,
		default:''
	}
})

module.exports=mongoose.model('Chat', chatSchema);
