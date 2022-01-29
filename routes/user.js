const express=require('express');
const router=express.Router();
const User=require('../schemas/user');

router.route('/')
	.get(async (req,res,next)=>{
		try{
			const users=await User.find({});
			res.json(users);
		}catch(err){
			console.error(err);
			next(err);
		}
	})
	.post(async (req,res,next)=>{
		try{
			const {userId}=req.body.userId;
			const users= await User.create({
				userId: userId
			})
		}catch(err){
			console.error(err);
			next(err);
		}
	})

router.delete('/:id', async (req,res)=>{
	try{
		const {userId}=req.params.id;
		const user=await User.remove({_id:req.params.id});
	}catch(err){
		console.error(err);
	}
})

module.exports=router;
