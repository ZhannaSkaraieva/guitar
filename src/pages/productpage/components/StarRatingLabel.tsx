import React from "react";

interface StarRatingLabelProps {
  rating: number;
}

const StarRatingLabel: React.FC<StarRatingLabelProps> = ({ rating }) => {
  return <div>{rating}</div>;
};

export default StarRatingLabel;
