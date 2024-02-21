const User = require("../models/userModel");
const crypto= require("crypto");

const sendEmail = require("../utils/sendEmail.js");

/// register the user

exports.registerUser = async (req, res, next) => {
  const user = await User.create(req.body);

  const token = user.getJWTToken();

  res.status(201).json({
    success: true,
    message: "User Registered Successfully",
    user,
    token,
  });
};

///USER lOGIN

exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(401).json({
      message: "Please enter email and password",
    });
  }

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const token = await user.getJWTToken();

  res.cookie("token", token, { httpOnly: true }).status(200).json({
    success: true,
    message: "Login successful",
    token,
  });
};

///logout user

exports.logout = (req, res, next) => {// Debugging statement
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });// Debugging statement
    res.status(200).json({ success: true, message: "Logout successful" });
  };
  
exports.demo = async (req, res) => {
  const user = await User.find();

  res.status(200).json({
    message: "success",
    user,
  });
};


exports.forgetPassword=async(req,res,next)=>{
  const user=await User.findOne({email:req.body.email});

  if(!user){
    return res.status(404).json({
      message:"user not found"
    })
  }


  ////get resetpassword token

  const resetToken= user.getResetPasswordToken();

  await user.save({validateBeforeSave:false});

  const resetPasswordUrl= `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;


  const message=`Your password reset token is :-\n\n ${resetPasswordUrl}`;


  try{
    await sendEmail({
      email:user.email,
      subject:`Password Recovery `,
      message


    })
    res.status(200).json({
      success:true,
      message:`Email sent to ${user.email} successfully`
    })
  }
  catch(error){
    user.resetPasswordToken=undefined;
    user.resetPasswordExpire=undefined;

    await user.save({validateBeforeSave:false});
    return res.status(500).json({
      message:error
    })
  }
}

///resetpasswords


exports.resetPassword=async(req,res,next)=>{
  const resetPasswordToken=crypto.
  createHash("sha256")
  .update(req.params.token)
  .digest("hex");


  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire:{$gt:Date.now()},

  });

  if(!user){
    return res.status(400).json({
      message:"Reset Password Token is Invalid"
    })
  }

  user.password= req.body.password;
  user.resetPasswordToken=undefined;
  user.resetPasswordExpire= undefined;

  await user.save();
  return res.status(200).json({
    user
  })


}



