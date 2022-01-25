const express=require('express');
const router=express.Router();
const Chat=require('../schemas/chat')

function num(date){
	if (date > 9){return date}
	else {return '0'+date}
}
const now=new Date();
const year=now.getFullYear();
const month=now.getMonth()+1;
const date=now.getDate();
const hour=now.getHours();
const minute=now.getMinutes();
const second=now.getSeconds();
const time=`${year}.${num(month)}.${num(date)} ${num(hour)}:${num(minute)}:${num(second)}`;


router.route('/')
	.get(async (req, res)=>{
		try{
			const chats=await Chat.find({});
			res.json({chats:chats});
		}catch(err){
			console.error(err);
		}
	})
	.post(async (req,res)=>{
		try{
			const chatting=await Chat.create({
				id:Date.now(),
				time:time,
				chatContent:req.body.chatContent
			})
			res.status(201).json(chatting);
		}catch(err){
			console.error(err);
		}
	})

module.exports=router;
