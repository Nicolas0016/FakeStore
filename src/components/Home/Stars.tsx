import React from "react";
import { EmptyStar, FullStar, HalfStar } from "../Icons";

interface StarsProps {
  quantityStars: number;
}

const Stars: React.FC<StarsProps> = ({ quantityStars }) => {
  const fullStars = Math.floor(quantityStars);
  const hasHalfStar = quantityStars % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <ul className="text-lightBlue flex gap-[5px]">
      {[...Array(fullStars)].map((_, index) => (
        <li key={`full-${index}`}>
          <FullStar />
        </li>
      ))}
      {hasHalfStar && (
        <li key="half">
          <HalfStar />
        </li>
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <li key={`empty-${index}`}>
          <EmptyStar />
        </li>
      ))}
    </ul>
  );
};

export default Stars;
