const Product=require("../models/productModel");
const axios =require("axios");




///create product


exports.createProduct= async(req,res,next)=>{
    const product= await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}


///get all products 
exports.getAllProducts= async (req,res)=>{
    const products= await Product.find()
    res.status(200).json({
        success:true,
        products
    })
}

/// Update Products 
exports.updateProducts=async(req,res,next)=>{
    let product= await Product.findById(req.params.id);
    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product= await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAdModify:false
    })
    res.status(200).json({
        success:true,
        message:"Product Update Successfully"
    })

}


///delete products
exports.deleteProducts = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        await Product.deleteOne({ _id: req.params.id }); // Use deleteOne() to delete the product

        res.status(200).json({
            success: true,
            message: "Product Deleted Successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};


exports.getProductDetails=async(req,res,next)=>{
    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"Product Not Found"
        })
    }
    res.status(200).json({
        success:true,
        product
    })
}


