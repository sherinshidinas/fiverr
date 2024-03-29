import createError from "../utils/createError.js";
import reviewModel from "../models/review.model.js";
import gigModel from "../models/gig.model.js";

export const createReview = async (req, res, next) => {
  if (req.isSeller)
    return next(createError(403, "Sellers can't create a review!"));

  const newReview = new reviewModel({
    userId: req.userId,
    gigId: req.body.gigId,
    desc: req.body.desc,
    star: req.body.star,
  });
  try {
    const review = await reviewModel.findOne({
      gigId: req.body.gigId,
      userId: req.userId,
    });

    if (review)
      return next(
        createError(403, "You have already created a review for this gig!")
      );

      const savedReview = await newReview.save();
      res.status(201).send(savedReview);
     
      await gigModel.findByIdAndUpdate(req.body.gigId, {
        $inc: {totalStars: req.body.star, starNumber:1}
      })
      
  } catch (error) {
    next(error);
  }
};

export const getReviews = async (req, res, next) => {
  try {
    const reviews = await reviewModel.find({gigId:req.params.gigId});
    res.status(200).send(reviews)
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
