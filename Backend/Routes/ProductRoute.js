const express = require("express");
const  {pagenant}  = require("../Controllers/pagecontroller");
const {getAllproduct, createproduct, getAllproducts, updateProduct, deleteProduct, getproductdeailss, createproductreview, getproductreviews, deleteproductreviews, getproducts} = require("../Controllers/ProductController");
const { isAuthenticatedUser , authorizeroles} = require("../middleware/auth");
const router = express.Router();
router.route("/products").get(getAllproducts);
//get a all products users
router.route('/pagenant').post( pagenant)
// router.route('/pagenant').post(getproducts)
// router.post('/pagenate', isAuthenticatedUser, getproducts.getproducts)
//create a product route only access admin
router.route("/admin/product/new").post(isAuthenticatedUser, authorizeroles("admin"),createproduct)
//update the product --admin
router.route('/admin/product/:id')
.put(isAuthenticatedUser,authorizeroles("admin") ,isAuthenticatedUser,updateProduct)
.delete(isAuthenticatedUser,authorizeroles("admin") ,isAuthenticatedUser,deleteProduct)
router.route("/product/:id").get(getproductdeailss) 
router.route("/product/review").put(isAuthenticatedUser, createproductreview)
router.route("/reviews").get(getproductreviews).delete(isAuthenticatedUser, deleteproductreviews)
module.exports =router



