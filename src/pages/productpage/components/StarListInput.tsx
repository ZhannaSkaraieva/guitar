import { Star } from "lucide-react";
import { useStarStore } from "../../../store/StarStore";

interface StarListInputProps {
  rating: number;
  onChange: (value: number) => void;
}

const StarListInput: React.FC<StarListInputProps> = ({
  rating, //текущее значение рейтинга
  onChange,
}) => {
  const maxValue = useStarStore((state) => state.maxValue);

  return (
    <div className="flex">
      {[...Array(maxValue)].map((star, index) => {
        const ratingValue = index + 1; // каждая звезда получает сое значение рейтинга
        return (
          <Star
            key={ratingValue}
            height={20}
            width={20}
            onClick={() => onChange(ratingValue)} // 👈 при клике вызываем пропс
            className={`cursor-pointer stroke-[#C90606] ${
              ratingValue <= rating ? "fill-[#C90606]" : "fill-none"
            }`}
          />
        );
      })}
    </div>
  );
};

export default StarListInput;