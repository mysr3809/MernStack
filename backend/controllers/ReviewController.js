import Review from "../models/Review.js";
 
export const getReviews = async (req, res) => {
    try {
        const firstReview = await Review.findOne({});
        console.log("firstReview",firstReview);
        res.status(200).json({ success: true, result: firstReview });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
