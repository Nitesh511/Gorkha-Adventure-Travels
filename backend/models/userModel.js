const mongoose= require("mongoose");
const validator= require("validator");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");
const crypto= require("crypto");


const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Your Name"],
        maxLength:[30, "Name Cannot Exceed 3- Characters"],


    },
    email:{
        type:String,
        required:[true,"Please Enter Your Email"],
        unique:true,
        validate:[validator.isEmail,"Please Enter a valid email"]
    },
    password:{
        type:String,
        required:[true,"Please Enter Your password"],
        minLength:[6,"Password Length should be more than 6 characters"],
        select:false
    },
    role:{
        type:String,
        default:"user"
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
})

userSchema.pre("save",async function(next){
    if (!this.isModified("password")) {
        return next();
    }

    // Proceed to hash the password with a cost of 10
    this.password = await bcrypt.hash(this.password, 10);
    next();
})


///jwt token
userSchema.methods.getJWTToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE
    })

};


///compare password

userSchema.methods.comparePassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}


//generating Password reset token
userSchema.methods.getResetPasswordToken=function(){
    const resetToken= crypto.randomBytes(20).toString("hex");

    //hsahing and adding resetPassword TOken to userSchema
    this.resetPasswordToken=crypto.createHash("sha256").update(resetToken).digest("hex");

    this.resetPasswordExpire=Date.now()+15*60*1000;

    return resetToken;
}


module.exports=mongoose.model("User",userSchema);