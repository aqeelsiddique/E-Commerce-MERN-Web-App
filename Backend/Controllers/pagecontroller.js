const { params } = require('../app');
const Product = require('../model/ProductModels');
const ErrorHandler = require('../utils/errorhandler');
const catchayncerror = require('../middleware/catchayncerror');
const ApiFeatures = require('../utils/appfeature');

//create a product only acess admin


////////////////get all product , pagination, sorting

const pagenant = async(req, res, next) => {
    try{
        var page = req.body.page;
        var sort = req.body.sort;
        const resultPerPage = 8;
        var product_data;
        var skip;

    if(page<=1){
        skip=0

    }
    else {
        skip = (page-1)*4



    }


     if(sort){



        }
        else{
            product_data = await Product.find().skip(skip).limit(4)
           
        }
        res.status(201).json({
            success:true,
            msg:"products details",
            data:product_data
        })


    }
    catch(error) {
        res.status(299).send({success:false, msg:error.message})
    }
}

const pagenant2 = async(req, res, next) => {
    try{
        var page = req.body.page;
        var sort = req.body.sort;
        var product_data;

        if(!req.body){
            res.status(500).json({
                success:false,


            })

        }

        else if(sort){

        }
        else{
            product_data = await Product.find().limit(2)
            res.status(201).json({
                success:true,
                msg:"products details",
                product_data
            })
        }


    }
    catch(error) {
        res.status(299).send({success:false, msg:error.message})
    }
}



module.exports = {
    pagenant,

    pagenant2
}

