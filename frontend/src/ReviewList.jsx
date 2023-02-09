import React, { useState, useEffect } from "react";
import axios from "axios";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);

  const getReviews = async () => {
    const response = await axios.get("http://localhost:8080/reviews");
		console.log(response);
    setReviews(response.data);
  };


  return (
    <div className="columns mt-5">
      <div className="column is-half"> 
      </div>
    </div>
  );
};

export default ReviewList;
