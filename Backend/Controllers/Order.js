const Order = require("../model/ordermodels");
const Product = require('../model/ProductModels');
const ErrorHandler = require('../utils/errorhandler');
const catchayncerror = require('../middleware/catchayncerror');

// Create new Order
exports.newOrder = catchayncerror(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body ;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,

  });

  res.status(201).json({
    success: true,
    order,
  });
});


////////////get single order
exports.getsingleorder = catchayncerror(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
   "name"
  )
  if(!order){

    return next(new ErrorHandler("Order are not find with this ID", 404))
  }

  res.status(200).json({
    success:true,
    order
  })



})

////////////get loged in user order

exports.myorder = catchayncerror(async (req, res, next) => {
  const orders = await Order.find({user: req.user._id})

 
  res.status(200).json({
    success:true,
    orders,
  })



})

///////get all order --admin

exports.getallorders = catchayncerror(async (req, res, next) => {
  const orders = await Order.find();

  let totalamount = 0;

  orders.forEach((order) => {
    totalamount += order.totalPrice
  })

 
  res.status(200).json({
    success:true,
    totalamount,
    orders,
  })



})
///upadate status order --admin

exports.updateorder = catchayncerror(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (order.orderStatus==="Delivered") {
    return next(new ErrorHandler("you have already delevired order", 404))
  }
  order.orderItems.forEach(async (order) => {
    await updateStock(order.product, order.quantity)
  })
  order.orderStatus = req.body.status
  if (req.body.status ==="Delivered") {
    order.deliveredAt = Date.now();
  }
  await order.save({ validateBeforeSave: false})
  res.status(200).json({
    success:true,

  })
})

async function updateStock(id, quantity) {
  const product = await Product.findById(id);
  product.Stock -= quantity;

  await product.save({ validateBeforeSave: false})
}





///////delete order --admin

exports.deleteorder = catchayncerror(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if(!order){

    return next(new ErrorHandler("Order are not find with this ID", 404))
  }

  await order.remove()

 
  res.status(200).json({
    success:true,

  })



})