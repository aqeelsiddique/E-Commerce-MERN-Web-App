const Product = require("../model/ProductModels");
const ErrorHandler = require("../utils/errorhandler");
const catchayncerror = require("../middleware/catchayncerror");
const ApiFeatures = require("../utils/appfeature");
//create a product only acess admin
exports.createproduct = catchayncerror(async (req, res, next) => {
  req.body.user = req.user.id;

  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product,
  });
});
//get a all product
exports.getAllproducts = catchayncerror(async (req, res, next) => {
  const resultPerPage = 12;
  const pagecount = await Product.countDocuments();

  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const products = await apiFeatures.query;
  res.status(201).json({
    success: true,
    products,
    pagecount,
  });
  console.log(products);
});
////////////////get all product , pagination, sorting

exports.getproducts = async (req, res, next) => {
  try {
    var page = req.body.page;
    var sort = req.body.sort;
    var product_data;

    if (!req.body) {
      res.status(500).json({
        success: false,
      });
    } else if (sort) {
    } else {
      product_data = await Product.find().limit(2);
      res.status(201).json({
        success: true,
        msg: "products details",
        product_data,
      });
    }
  } catch (err) {
    res.status(299).send({ success: false, msg: err.msg });
  }
};

//update a products ----only admin update the products

exports.updateProduct = catchayncerror(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
});
////delete a product  --- admin
exports.deleteProduct = catchayncerror(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  await Product.deleteOne();

  res.status(200).json({
    success: true,
    message: "product delete successfull",
  });
});
///get a details products
exports.getproductdeailss = catchayncerror(async (req, res, next) => {
  let product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }
  res.status(200).json({
    success: true,
    message: product,
  });
});
///// Create New Review or Update the review
exports.createproductreview = catchayncerror(async (req, res, next) => {
  const { rating, comment, productid } = req.body;
  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };
  const product = await Product.findById(productid);

  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;
  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });
  product.ratings = avg / product.reviews.length;
  await product.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
  });
});
////////////////////////////

// exports.getAllproductw = (req,res) => {
//     res.status(200).json({message:"Router is Workin is good"})
// }

// /////////////// create new review  or update the review
// exports.createproductreview = catchayncerror(async (req, res, next) => {
//     const {rating, comment, productid} = req.body;
//     const review = {
//         user: req.user._id,
//         name:req.user.name,
//         rating:Number(rating),
//         comment

//     };

//     const product = await Product.findById(productid)

//     const isreviwed = product.reviews.find(
//         (rev) => rev.user.toString() === req.user._id.toString()
//     )

//     if(isreviwed){
//         product.reviews.forEach((rev) => {
//             if (rev.user.toString() === req.user._id.toString())
//             (rev.rating = rating), (rev.comment = comment);
//         })
//     }

//     else {
//         product.reviews.push(review);
//         product.numofreviews = product.reviews.lenght

//     }

//     let avg = 0;
//    product.reviews.forEach(rev=>{
//        avg+=rev.rating
//     })
//     product.ratings = avg
//     /product.reviews.lenght

//     await product.save({validateBeforeSave: false})

//     res.status(200).json({
//         success:true
//     })

// })
////////////get all product review

exports.getproductreviews = catchayncerror(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

/////////////delete a Reviews
exports.deleteproductreviews = catchayncerror(async (req, res, next) => {
  const product = await Product.findById(req.query.productid);

  if (!product) {
    return next(new ErrorHandler("product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });
  const ratings = avg / product.reviews.length;

  const numofreviews = reviews.length;
  await Product.findByIdAndUpdate(
    req.query.productid,
    {
      reviews,
      ratings,
      numofreviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
