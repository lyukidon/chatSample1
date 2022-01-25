const mongoose=require('mongoose');

const {Schema}=mongoose;
const chatSchema = new Schema({
	id:{
		type:Number,
		default:Date.now()
	},
	time:{
		type: String,
	},
	chatContent:{
		type:String,
		default:''
	}
})

module.exports=mongoose.model('Chat', chatSchema);
