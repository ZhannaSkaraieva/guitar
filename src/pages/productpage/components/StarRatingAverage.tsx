import React from 'react'
import { useStarStore } from '../../../store/StarStore'
import { Star } from 'lucide-react';
import { Guitar } from '../../../Data';
import { useProductPageStore } from '../../../store/ProductPageStore';

interface StarRatingAverageProps {
  productId: number;
}

const StarRatingAverage: React.FC<StarRatingAverageProps> = ({productId}) => {
  const ratingAverage = useStarStore((state) => state.ratingAverage);
  const setRatingAverage = useStarStore((state) => state.setRatingAverage);

    const reviews = useProductPageStore((state) => state.reviews);
    const currentRating = useStarStore((state) => state.currentRating);

  const maxValue = useStarStore((state) => state.maxValue);
  const setMaxValue = useStarStore((state) => state.setMaxValue);

  const guitarReviews = reviews.filter(
    (review) => review.productId === productId,
  );

  const totalRating = guitarReviews.reduce(
    (sum, review) => sum + review.rating,
    0,
  );

  const averageRating =
    guitarReviews.length > 0 ? totalRating / guitarReviews.length : 0;

  return (
    <div className="flex items-center gap-1">
      {[...Array(maxValue)].map((_, index) => {
        const starNumber = index + 1;

        let fillClass = "fill-none";

        if (starNumber <= Math.floor(averageRating)) {
          fillClass = "fill-[#C90606]"; // полная
        } else if (starNumber - averageRating <= 0.5) {
          fillClass = "fill-[#C90606]/50"; // половинка
        }
        return (
          <Star
            key={index}
            className={`stroke-[#C90606] ${fillClass}`}
            width={20}
            height={20}
          />
        );
      })}

      {/* отображение средней цифрой */}
      <span className="text-sm text-black ml-2">
        {reviews.length > 0 ? averageRating : ""}
      </span>
    </div>
  );
};

export default StarRatingAverage