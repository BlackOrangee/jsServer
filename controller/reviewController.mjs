import Review from "../model/Review.mjs";

const getAllReviews = async (req, res) => {
    const reviews = await Review.find({});
    res.send(reviews);
}

const createReview = async (req, res) => {
    const review = new Review(req.body);
    try {
        await review.save();
    } catch (error) {
        res.status(500).send(error);
    }
    res.send(review);
}

const deleteReview = async (req, res) => {
    try {
        await Review.findByIdAndDelete(req.params.id);
    } catch (error) {
        res.status(500).send(error);
    }
}

export default { getAllReviews, createReview, deleteReview }
