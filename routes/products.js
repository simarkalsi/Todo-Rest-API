const express=require("express");
const router=express.Router();

const{
    getAllProducts,
    getAllProductsTesting,
}= require("../controllers/products")

router.route('/addtodoCards').get(getAllProducts);
router.route("/getAllTodoCards").get(getAllProductsTesting);


module.exports=router;