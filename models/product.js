const mongoose=require("mongoose");


const  productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true
    }
})

module.exports=mongoose.model("Product",productSchema);