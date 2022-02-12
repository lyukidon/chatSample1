const express=require('express');
// const Project=require('../schemas/project')
const router=express.Router();
const data=require('./about-data')

router.route('/')
    .get(async(req,res,next)=>{
        try{
            // const project=await Project.find({});
            res.render('about', {
                skills:data.skills,
                projects:data.projects,
            });
        }catch(err){
            console.error(err);
            next(err);
        }
    })

module.exports=router;