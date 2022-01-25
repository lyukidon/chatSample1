const express=require('express');
const router=express.Router();
const Chat=require('../schemas/chat')

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
				time:req.body.time,
				chatContent:req.body.chatContent
			})
			res.status(201).json(chatting);
		}catch(err){
			console.error(err);
		}
	})

module.exports=router;
