const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required:[true, "Please enter a product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "Please enter a product name"]
    },
    price:{
        type:Number,
        required:[true, "Please enter product price"],
        maxLenght:[8, "price cannot exceed 8 characters"]
    },
    ratings:{
        type:Number,
        default:0
       
    },
    images:[
        {
            public_id: {
                type:String,
                required:true

            },
            url: {
                type:String,
                required:true

            }
        }
    ],
    category:{
        type:String,
        required:[true, "Please enter product Categories"]
    },
    Stock:{
        type: Number,
        required:[true, "please enter Product Stock"],
        maxLenght:[4, 'stock cannot exceed 4 character'],
        default:1
    },
    numofreviews: {
        type:Number,
        default:0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref:"User",
                required: true,
        
            },
            name:{
                type:String,
                require:true
            },
            rating:{
                type:Number,
                require:true

            },
            Comment:{
                type:String,
                require:true

            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref:"User",
        required: true,

    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongoose.model("product", productSchema)
