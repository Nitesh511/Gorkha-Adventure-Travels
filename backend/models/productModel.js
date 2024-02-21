const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter the Product Name"],
  },
  description: {
    type: String,
    required: [true, "Please Enter the Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter the Product Price"],
    maxLength: [8, "Price cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
  },
  numOfReviews:{
    type:Number,
    default:0
  },
  reviews:[
    {
        name:{
            type:String
        },
        rating:{
            type:String
        },
        comment:{
            type:String
        }
    }
  ],
  user:{
    type:mongoose.Schema.ObjectId,
    reg:"User",
    requires:true

  },
  createdAt:{
    type:Date,
    default:Date.now
  }

});

module.exports=mongoose.model("Product",productSchema);
