import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: { type: String, required: true }, 
    body: { type: String, required: true },  
    rating: { type: Number, required: true },
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product' },
});

const Review = mongoose.model('Review', schema);
export default Review;
