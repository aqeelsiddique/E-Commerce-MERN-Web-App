const express = require('express');

const { newOrder, getsingleorder, myorder, getallorders, updateorder, deleteorder } = require('../Controllers/Order');

const router = express.Router()


const { isAuthenticatedUser , authorizeroles} = require("../middleware/auth");

router.route('/order/new').post( isAuthenticatedUser , newOrder);
router.route("/order/:id").get(isAuthenticatedUser, authorizeroles("admin"), getsingleorder)
router.route("/orders/me").get(isAuthenticatedUser, myorder)
router.route("/admin/orders").get(isAuthenticatedUser, authorizeroles("admin"), getallorders)
router.route("/admin/order/:id").put(isAuthenticatedUser, authorizeroles("admin"), updateorder).delete( isAuthenticatedUser, authorizeroles("admin"), deleteorder)

module.exports = router;