import { CDN_URL } from "../utils/constants";

const ResCard = (props) => {
  const { restData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, costForTwo } =
    restData?.info;
  return (
    <div
      className="m-4 p-4 w-[280px] border border-box border-grey rounded-lg overflow-hidden transition-transform ease-in-out duration-300 transform hover:scale-105 "
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        className="cardImage"
        src={CDN_URL + cloudinaryImageId}
        alt="ItemLogo"
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="flex flex-wrap overflow-hidden max-w-full h-6">
        {cuisines.join(",")}
      </h4>
      <div className="flex justify-between">
        <h3 className="rating">{avgRating}</h3>
        <span className="dot">·</span>
        <h3 className="px-2">{sla.slaString}</h3>
        <span className="dot">·</span>
        <h3 className="px-2">{costForTwo}</h3>
      </div>
    </div>
  );
};
export default ResCard;
