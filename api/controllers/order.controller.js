import orderModel from "../models/order.model.js";
import createError from "../utils/createError.js";
import gigModel from "../models/gig.model.js";

export const createOrder = async (req, res, next) => {
  try {
    const gig = await gigModel.findById(req.params.gigId);

    const newOrder = new orderModel({
      gigId: gig._id,
      img: gig.cover,
      title: gig.title,
      buyerId: req.userId,
      sellerId: gig.userId,
      price: gig.price,
      payment_intent: "temporary",
    });
    await newOrder.save();
    res.status(200).send("success");
  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await orderModel.find({
      ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
      isCompleted: true,
    });
    res.status(200).send(orders);
  } catch (error) {
    next(error);
  }
};
