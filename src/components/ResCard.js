import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwo } =
    restData?.info;
  return (
    <div className="res-card">
      <img
        className="cardImage"
        src={CDN_URL + cloudinaryImageId}
        alt="ItemLogo"
      ></img>
      <h3 className="food-card-title ">{name}</h3>
      <h4 className="food-card-description">{cuisines}</h4>
      <div className="rating-container">
        <h3 className="rating">{avgRating}</h3>
        <span className="dot">·</span>
        <h3 className="time">{sla.slaString}</h3>
        <span className="dot">·</span>
        <h3 className="food-card-price">{costForTwo}</h3>
      </div>
    </div>
  );
};
export default ResCard;
