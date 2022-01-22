const mongoose=require('mongoose');

const now = new Date();
let year=now.getYear();
let month = now.getMonth() + 1;
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
const time= `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`

const {Schema}=mongoose;
const chatSchema = new Schema({
	time:{
		type: String,
		required:true,
		default: time
	},
	chat:{
		type:String,
		default:''
	}
})

module.exports=mongoose.model('Chat', chatSchema);
