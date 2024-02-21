const jwt =require("jsonwebtoken");
const User= require("../models/userModel");



exports.isAuthenticatedUser=async(req,res,next)=>{
    const {token}= req.cookies;

    if (!token){
        return res.status(401).json({
            message:"Please Login to access this resources"
        })
    }
    const decodedData= jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decodedData.id)
    next();

}


exports.authorizeRoles=(...roles)=>{
    return (req,res,next)=>{
        if(!roles.includes(req.user.role)){
            res.status(403).json({
                message:`${req.user.role} is not allowed to access this resources`
            })
        }
        next();
    }
}