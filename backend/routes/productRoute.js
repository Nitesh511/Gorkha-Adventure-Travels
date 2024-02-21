const express= require("express");
const { getAllProducts,createProduct, updateProducts, deleteProducts, coinData, getProductDetails } = require("../controllers/productController");
const {isAuthenticatedUser, authorizeRoles}=require('../middleware/auth')



const router= express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(isAuthenticatedUser,authorizeRoles("admin"),createProduct);
router.route("/product/:id").put(updateProducts).delete(deleteProducts).get(getProductDetails);


module.exports=router