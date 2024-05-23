
import { useParams } from 'react-router-dom';
import useCollections from '../utils/useCollections';

import { Link } from 'react-router-dom';

import Shimmer from "./Shimmer";
import CollectionCard from './CollectionCard';


const Collection = () => {
  const {colId} = useParams();
  
  const collInfo = useCollections(colId);
  console.log(collInfo);

  
  if(collInfo===null) return  <Shimmer/> ;
  // const menuTitle = collInfo;
  // const {name,cuisines,costForTwoMessage,avgRating} = collInfo?.cards[2]?.card?.card?.info;
   
  
  //  console.log(`"hello " ${menuTitle} ${menuTitle.name}`);
  //  console.log(menuTitle)

    return (
      <div className="res-card-data">
      <div className='res-data-text'>
      <h2>{collInfo[0]?.card?.card?.title}</h2>
      <p>{collInfo[0]?.card?.card?.description}</p>
      </div>
       <div className="res-container-colllection">
        {/* //RestaurantCard */}
        {collInfo?.map((restaurant) => {
						return restaurant?.card?.card?.info ? (
							<Link
								to={
									"/restaurants/" +
									restaurant?.card?.card?.info?.id
								}
								key={
									"infoCard" +
									restaurant?.card?.card?.info?.id
								}
							>
								<CollectionCard
									{...restaurant?.card?.card?.info}
								/>
							</Link>
						) : null;
					})}
      </div>
      </div>
    )
  }

  export default Collection;