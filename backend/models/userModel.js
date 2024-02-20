const mongoose= require("mongoose");
const validator= require("validator");
const bcrypt= require("bcrypt");
const jwt= require("jsonwebtoken");

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

    this.password= await bcrypt.hash(this.password,10);
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
module.exports=mongoose.model("User",userSchema);