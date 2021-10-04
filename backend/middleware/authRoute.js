const jwt= require('jsonwebtoken');
const User = require('../models/user')

module.exports=(req,res,next)=>{
    const {authorization} = req.headers
    //authorization = Bearer token
    if(!authorization)
    {
        return res.status(401).json({error:"You must be logged in"})
    }
    const token = authorization.replace("Bearer" , " ")
    jwt.verify(token, process.env.JWT_SECRET,(err,payload)=>{
        if(err)
        {
            return res.status(401).json({error:"You must be logged in"})
        }
        const {id} = payload
        User.findById(id).then(userdata=>{
           const {fullName,email,_id} = userdata
            req.user = {fullName,email,_id}
            next()
        })
      
    })

}