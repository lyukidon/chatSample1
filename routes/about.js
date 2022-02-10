const express=require('express');
const Project=require('../schemas/project')
const router=express.Router();

router.route('/')
    .get(async(req,res,next)=>{
        try{
            const project=await Project.find({});
            res.render('about', {project:project});
        }catch(err){
            console.error(err);
            next(err);
        }
    })

module.exports=router;