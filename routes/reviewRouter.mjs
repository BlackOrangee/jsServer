import express from 'express';
import ReviewController from '../controller/reviewController.mjs';
const reviewRouter = express.Router();

reviewRouter.get('/', ReviewController.getAllReviews);
reviewRouter.post('/', ReviewController.createReview);
reviewRouter.delete('/:id', ReviewController.deleteReview);

export default reviewRouter;
