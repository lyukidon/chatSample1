const mongoose=require('mongoose');

const {Schema}=mongoose;
const chatSchema = new Schema({
	id:{
		type:Number
	},
	userId:{
		type:String,
	},
	time:{
		type: String,
		required: true
	},
	chatContent:{
		type:String
	},
	ip:{
		type:String,
	}
})

module.exports=mongoose.model('Chat', chatSchema);
