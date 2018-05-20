import express from 'express';
import path from 'path';
const router = express.Router();


router.get('/token(|/:token)',(req,res,next)=>{
    let token = req.body.token || req.params.token || req.query.token || req.header('token');
    res.send(token);
});

router.get('*',(req,res,next)=>{
   res.sendFile(path.join(__dirname,'views','index.html'))
});

export default router;