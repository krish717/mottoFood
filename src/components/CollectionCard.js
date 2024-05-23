import { CON_URL } from "../utils/constants";
import  Shimmer  from "./Shimmer";
const CollectionCard = (props) => {
    // const {resData} = props;
    const {cloudinaryImageId,name,cuisines,avgRating ,sla} = props;
    const {deliveryTime} =  sla
    return !props ? (
      <Shimmer/>
    ) : (
      <div className="res-card1">
        <div className="res-card">
        <div className="res-card-img"><img alt="res-img" className="res-img" src={CON_URL+cloudinaryImageId}/></div>
       <div className="res-det">
       <div className="res-name p"><p>{name}</p></div>
       <div className="res-details">
        <p>{avgRating}</p>
       <p>{deliveryTime} mins</p>
       </div>
       <div className="cuisines p">{cuisines.join(", ")}</div>
       </div>
      </div>
      </div>
    
    );
  }

  export default CollectionCard;