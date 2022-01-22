const express=require('express');
const Chat=require('../schemas/chat');
const router=express.Router();

router.get('/chat',async (req,res,next)=>{
	try{
		const chats= await Chat.find({});
		res.json({chats:chats});
	}catch(err){
		console.error(err);
		next(err);
	};
});

module.exports=router;
