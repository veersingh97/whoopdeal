import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import './StarRating.css';


const StarRatings = ({ rating, reviews = Math.floor(Math.random() * 100 + 50) }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <BsStarFill className="star-icon" />
        ) : rating >= number ? (
          <BsStarHalf className="star-icon" />
        ) : (
          <BsStar className="star-icon" />
        )}
      </span>
    );
  });
  return <div className="star-div">{ratingStar}<span>{`(${reviews} customers reviwed)`}</span></div>;
};

export default StarRatings;
