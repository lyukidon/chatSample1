const express=require('express');
const Chat=require('../schemas/chat');
const router=express.Router();

router.get('/',async (req,res,next)=>{
	try{
		const chats= await Chat.find({});
		res.render('index',{chats:chats})
	}catch(err){
		console.error(err);
		next(err);
	};
});

module.exports=router;
