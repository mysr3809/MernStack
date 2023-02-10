
import express from "express";
import { 
  getReviews,addReview
} from "../controllers/ReviewController.js";
 
const router = express.Router();
 
router.get('/reviews', getReviews);
router.post('/post', addReview)

 
export default router;